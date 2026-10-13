import React, { useEffect, useState } from "react";

// Caption for the current line. While voice is playing, the part already
// spoken is shown at full strength and the rest is dimmed. Only this small
// component re-renders as words are spoken. Mount it with a `key` per message
// so progress restarts with each new line.
export default function Caption({ text, tracking, onProgress }) {
  const [spokenTo, setSpokenTo] = useState(0);

  useEffect(
    () => onProgress(({ charIndex, charLength }) => setSpokenTo(charIndex + charLength)),
    [onProgress]
  );

  const split = tracking ? Math.min(spokenTo, text.length) : text.length;

  return (
    <>
      {/* Screen readers get the plain line once; the visual copy changes as it is spoken. */}
      <p aria-live="polite" className="sr-only">
        {text}
      </p>
      <p aria-hidden="true" className="mt-2 text-[0.9375rem] leading-relaxed">
        <span className="text-ink">{text.slice(0, split)}</span>
        <span className="text-ink-mute">{text.slice(split)}</span>
      </p>
    </>
  );
}
