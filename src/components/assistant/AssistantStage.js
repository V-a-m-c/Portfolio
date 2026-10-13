import React, { useEffect, useRef } from "react";
import Icon from "../ui/Icon";
import AssistantAvatar from "./AssistantAvatar";

const bars = [4, 7, 5, 10, 14, 9, 6, 12, 16, 11, 7, 13, 9, 5, 11, 15, 8, 12, 6, 10, 14, 7, 9, 5];

const stateLabels = {
  idle: "Ready",
  speaking: "Speaking",
  paused: "Paused",
  finished: "Finished",
};

const motionAllowed = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Dark header of the panel: the avatar, its current state, and a waveform.
// The browser does not expose synthesized speech as an audio stream, so the
// waveform is driven by the engine's word events instead of real audio levels:
// a CSS loop runs while speaking and each spoken word adds a short pulse.
export default function AssistantStage({ state, voiceOn, onProgress, onClose, children }) {
  const waveRef = useRef(null);

  useEffect(
    () =>
      onProgress(({ charLength }) => {
        const wave = waveRef.current;
        if (!wave || !wave.animate || !motionAllowed()) return;
        const strength = 1.25 + Math.min(charLength, 10) * 0.05;
        wave.animate([{ transform: `scaleY(${strength})` }, { transform: "scaleY(1)" }], {
          duration: 220,
          easing: "ease-out",
        });
      }),
    [onProgress]
  );

  return (
    <header className="bg-night text-night-text">
      <div className="flex items-center gap-3.5 px-4 py-3.5">
        <AssistantAvatar size={60} state={state} live />
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-semibold leading-tight text-white">Vamsi's AI assistant</h2>
          <p className="mt-0.5 flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-night-mute">
            <span className={`state-dot state-dot-${state}`} />
            {voiceOn ? stateLabels[state] : "Captions only"}
          </p>
          <svg
            ref={waveRef}
            viewBox="0 0 143 18"
            preserveAspectRatio="none"
            className={`wave wave-${state} mt-2 h-5 w-full max-w-[13rem] text-accent-bright`}
            aria-hidden="true"
            focusable="false"
          >
            {bars.map((height, index) => (
              <rect key={index} className="wave-bar" x={index * 6} y={(18 - height) / 2} width="3" height={height} rx="1.5" fill="currentColor" />
            ))}
          </svg>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close assistant"
          className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full border border-night-line text-night-mute transition-colors duration-200 hover:border-night-mute hover:text-white"
        >
          <Icon name="close" size={18} />
        </button>
      </div>
      {children}
    </header>
  );
}
