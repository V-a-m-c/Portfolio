import React, { useId } from "react";

const mouthBars = [3, 6.5, 9, 6.5, 3];

// Original holographic assistant drawn in SVG. It is deliberately an AI
// character, not a likeness of Vamsi. `state` is idle | speaking | paused |
// finished; `live` turns on the ambient ring, scan, and blink animations, so
// the small launcher copy stays still.
export default function AssistantAvatar({ size = 40, state = "idle", live = false }) {
  const id = useId().replace(/:/g, "");
  const clipId = `${id}clip`;
  const headId = `${id}head`;
  const scanId = `${id}scan`;

  return (
    <svg
      viewBox="0 0 96 96"
      width={size}
      height={size}
      className={`avatar avatar-${state} ${live ? "avatar-live" : ""} shrink-0`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="48" cy="48" r="46" />
        </clipPath>
        <linearGradient id={headId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a322e" />
          <stop offset="1" stopColor="#171b19" />
        </linearGradient>
        <linearGradient id={scanId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6fe0bd" stopOpacity="0" />
          <stop offset="0.5" stopColor="#6fe0bd" stopOpacity="0.22" />
          <stop offset="1" stopColor="#6fe0bd" stopOpacity="0" />
        </linearGradient>
      </defs>

      <circle cx="48" cy="48" r="48" fill="#111413" />
      <circle className="avatar-ring" cx="48" cy="48" r="44" fill="none" stroke="#6fe0bd" strokeWidth="1" strokeDasharray="2 7" />
      <circle className="avatar-arc" cx="48" cy="48" r="40" fill="none" stroke="#6fe0bd" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="46 205" />

      <g clipPath={`url(#${clipId})`}>
        <path d="M20 98c1-15 12-23 28-23s27 8 28 23Z" fill="#191d1b" stroke="#2b312e" />
        <path d="M48 20v-5" stroke="#6fe0bd" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="48" cy="13" r="2.4" fill="#6fe0bd" />
        <rect x="26" y="20" width="44" height="46" rx="19" fill={`url(#${headId})`} stroke="#39423d" />
        <rect x="31" y="32" width="34" height="14" rx="7" fill="#0b0e0d" stroke="#6fe0bd" strokeOpacity="0.55" />
        <rect className="avatar-eye" x="38.5" y="36" width="5" height="6" rx="2.5" fill="#6fe0bd" />
        <rect className="avatar-eye" x="52.5" y="36" width="5" height="6" rx="2.5" fill="#6fe0bd" />
        <g fill="#6fe0bd">
          {mouthBars.map((height, index) => (
            <rect
              key={index}
              className="avatar-bar"
              x={37.8 + index * 4.5}
              y={56 - height / 2}
              width="2.4"
              height={height}
              rx="1.2"
            />
          ))}
        </g>
        <rect className="avatar-scan" x="0" y="-18" width="96" height="18" fill={`url(#${scanId})`} />
      </g>
    </svg>
  );
}
