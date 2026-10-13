// Framework-free wrapper around the browser's SpeechSynthesis API.
//
// The panel talks to this small interface (speak / pause / resume / stop,
// plus status and progress events). A hosted text-to-speech service can be
// added later by writing another controller with the same shape that plays
// audio returned from a server, without touching the UI.

import { chooseVoice } from "./voices";

export const speechSupported =
  typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

// Moderate pace and natural pitch; the voice itself is chosen in voices.js.
const RATE = 0.95;
const PITCH = 1;
// How long a first utterance waits for the browser to finish loading voices.
const VOICE_WAIT_MS = 400;

// Long utterances are cut off by some engines, so text is queued one
// sentence at a time. `start` is each sentence's offset in the full text.
export function splitSentences(text) {
  const sentences = [];
  const boundary = /[.!?]+\s+/g;
  let start = 0;
  let match = boundary.exec(text);
  while (match) {
    const end = match.index + match[0].length;
    sentences.push({ text: text.slice(start, end), start });
    start = end;
    match = boundary.exec(text);
  }
  if (start < text.length) sentences.push({ text: text.slice(start), start });
  return sentences;
}

export function createSpeechController() {
  let state = { status: "idle", error: false }; // idle | speaking | paused | finished
  let run = 0; // increments on every speak/stop so late events from old runs are ignored
  let current = { text: "", position: 0 };
  let queued = []; // keeps utterances referenced; some engines drop events otherwise
  const statusListeners = new Set();
  const progressListeners = new Set();

  // The chosen voice is kept for the whole conversation and only re-evaluated
  // when the browser reports that its voice list changed (voices often load
  // asynchronously after the page does).
  let voice = null;
  let voicesChanged = true;
  const onVoicesChanged = () => {
    voicesChanged = true;
  };
  const canListen = speechSupported && typeof window.speechSynthesis.addEventListener === "function";

  const currentVoice = () => {
    if (voicesChanged) {
      voice = chooseVoice(window.speechSynthesis.getVoices());
      voicesChanged = false;
    }
    return voice;
  };

  const setState = (next) => {
    state = { ...state, ...next };
    statusListeners.forEach((listener) => listener());
  };

  // Engines keep delivering buffered word events for a moment after pausing.
  // The position is still recorded, but listeners only hear about it while
  // speech is actually playing, so captions hold still when paused.
  const emitProgress = (charIndex, charLength = 0) => {
    current.position = charIndex;
    if (state.status === "paused") return;
    progressListeners.forEach((listener) => listener({ charIndex, charLength }));
  };

  const stop = () => {
    run += 1;
    queued = [];
    if (speechSupported) window.speechSynthesis.cancel();
    if (state.status !== "idle" || state.error) setState({ status: "idle", error: false });
  };

  const speak = (text, from = 0) => {
    if (!speechSupported || !text) return;
    run += 1;
    const thisRun = run;
    const synth = window.speechSynthesis;
    synth.cancel(); // never overlap with anything already queued
    current = { text, position: from };

    const sentences = splitSentences(text)
      .filter((sentence) => sentence.start + sentence.text.length > from)
      .map((sentence) =>
        sentence.start < from ? { text: text.slice(from, sentence.start + sentence.text.length), start: from } : sentence
      );

    const begin = () => {
      if (thisRun !== run) return;
      const chosen = currentVoice(); // one voice for every sentence of this line
      queued = sentences.map((sentence, index) => {
        const utterance = new SpeechSynthesisUtterance(sentence.text);
        if (chosen) utterance.voice = chosen;
        utterance.lang = chosen ? chosen.lang : "en-IN";
        utterance.rate = RATE;
        utterance.pitch = PITCH;
        utterance.onstart = () => {
          if (thisRun === run) emitProgress(sentence.start);
        };
        utterance.onboundary = (event) => {
          if (thisRun !== run || (event.name && event.name !== "word")) return;
          emitProgress(sentence.start + event.charIndex, event.charLength || 0);
        };
        utterance.onend = () => {
          if (thisRun !== run || index !== sentences.length - 1) return;
          queued = [];
          emitProgress(text.length);
          setState({ status: "finished" });
        };
        utterance.onerror = (event) => {
          if (thisRun !== run || event.error === "interrupted" || event.error === "canceled") return;
          run += 1;
          queued = [];
          synth.cancel();
          setState({ status: "idle", error: true });
        };
        return utterance;
      });

      queued.forEach((utterance) => synth.speak(utterance));
    };

    setState({ status: "speaking", error: false });
    if (synth.getVoices().length > 0 || !canListen) {
      begin();
      return;
    }
    // Voices have not loaded yet. Wait briefly for them rather than starting in
    // the browser's default voice, then go ahead with whatever is available.
    let timer = 0;
    const ready = () => {
      window.clearTimeout(timer);
      synth.removeEventListener("voiceschanged", ready);
      voicesChanged = true;
      begin();
    };
    timer = window.setTimeout(ready, VOICE_WAIT_MS);
    synth.addEventListener("voiceschanged", ready);
  };

  const pause = () => {
    if (!speechSupported || state.status !== "speaking") return;
    window.speechSynthesis.pause();
    setState({ status: "paused" });
  };

  const resume = () => {
    if (!speechSupported || state.status !== "paused") return;
    const thisRun = run;
    window.speechSynthesis.resume();
    setState({ status: "speaking" });
    // Some mobile engines treat pause as cancel. If nothing is playing after
    // resuming, pick up again from the last word that was reached.
    window.setTimeout(() => {
      const synth = window.speechSynthesis;
      if (thisRun === run && state.status === "speaking" && !synth.speaking && !synth.pending) {
        speak(current.text, current.position);
      }
    }, 350);
  };

  return {
    supported: speechSupported,
    getState: () => state,
    subscribe(listener) {
      statusListeners.add(listener);
      return () => statusListeners.delete(listener);
    },
    onProgress(listener) {
      progressListeners.add(listener);
      return () => progressListeners.delete(listener);
    },
    speak,
    pause,
    resume,
    stop,
    // Starts watching the device's voice list; returns a function that stops.
    watchVoices() {
      if (!canListen) return () => {};
      window.speechSynthesis.getVoices(); // prompts the list to start loading
      window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
      return () => window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
    },
  };
}
