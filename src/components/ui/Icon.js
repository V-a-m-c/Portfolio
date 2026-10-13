import React from "react";

// One small inline icon set (24px grid) so the site ships no icon library.
const stroke = {
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  "arrow-up": <path d="M12 19V5M6 11l6-6 6 6" />,
  "chevron-left": <path d="m15 6-6 6 6 6" />,
  "chevron-right": <path d="m9 6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </>
  ),
  file: (
    <>
      <path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Z" />
      <path d="M14 3.5V8h4M9 12.5h6M9 16h6" />
    </>
  ),
  printer: (
    <>
      <path d="M7 9V4h10v5M7 17H5.5A1.5 1.5 0 0 1 4 15.5v-5A1.5 1.5 0 0 1 5.5 9h13a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5H17" />
      <rect x="7" y="14" width="10" height="6" rx="1" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.5 8.5 4.5-8.5 4.5-8.5-4.5Z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11 4.5 12.7 9.3 17.5 11l-4.8 1.7L11 17.5l-1.7-4.8L4.5 11l4.8-1.7Z" />
      <path d="M18.5 3.5v3M17 5h3M18.5 16.5v3M17 18h3" />
    </>
  ),
  layout: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M9.5 9.5v10" />
    </>
  ),
  server: (
    <>
      <rect x="3.5" y="4" width="17" height="7" rx="2" />
      <rect x="3.5" y="13" width="17" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </>
  ),
  cloud: (
    <path d="M7.5 18.5a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17.5 10a4.25 4.25 0 0 1 .25 8.5Z" />
  ),
  wrench: (
    <path d="M14.5 6.2a4 4 0 0 0-5.3 5.1L3.8 16.7a1.8 1.8 0 0 0 0 2.5l1 1a1.8 1.8 0 0 0 2.5 0l5.4-5.4a4 4 0 0 0 5.1-5.3l-2.6 2.6-2.3-.7-.7-2.3Z" />
  ),
  graduation: (
    <>
      <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5Z" />
      <path d="M6.5 11.2v4.3c0 1.2 2.5 2.5 5.5 2.5s5.5-1.3 5.5-2.5v-4.3M21.5 9v5.5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </>
  ),
  play: <path d="M8 5.5v13l10.5-6.5Z" />,
  pause: <path d="M8.5 5.5v13M15.5 5.5v13" />,
  stop: <rect x="6.5" y="6.5" width="11" height="11" rx="1.5" />,
  replay: (
    <>
      <path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5" />
      <path d="M4.5 4.5v4.5H9" />
    </>
  ),
  volume: (
    <>
      <path d="M4 9.5h3l4.5-3.5v12L7 14.5H4Z" />
      <path d="M15 9.5a3.5 3.5 0 0 1 0 5M17.5 7a7 7 0 0 1 0 10" />
    </>
  ),
  "volume-off": (
    <>
      <path d="M4 9.5h3l4.5-3.5v12L7 14.5H4Z" />
      <path d="m15.5 9.5 5 5M20.5 9.5l-5 5" />
    </>
  ),
};

const solid = {
  github: (
    <path d="M12 2.5a9.7 9.7 0 0 0-3.07 18.9c.49.09.67-.21.67-.47v-1.8c-2.7.59-3.27-1.15-3.27-1.15-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59.98.07 1.49 1 1.49 1 .87 1.49 2.28 1.06 2.84.81.09-.63.34-1.06.62-1.3-2.16-.25-4.43-1.08-4.43-4.8 0-1.06.38-1.93 1-2.61-.1-.25-.43-1.24.1-2.58 0 0 .81-.26 2.67 1a9.3 9.3 0 0 1 4.86 0c1.85-1.26 2.66-1 2.66-1 .53 1.34.2 2.33.1 2.58.62.68 1 1.55 1 2.61 0 3.73-2.28 4.55-4.44 4.79.35.3.66.89.66 1.8v2.66c0 .26.18.57.68.47A9.7 9.7 0 0 0 12 2.5Z" />
  ),
  linkedin: (
    <path d="M5.3 3.5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM3.7 9h3.2v11.5H3.7Zm5.3 0h3.07v1.57h.04c.43-.81 1.47-1.67 3.03-1.67 3.24 0 3.84 2.13 3.84 4.9v6.7h-3.2v-5.94c0-1.42-.03-3.24-1.97-3.24-1.98 0-2.28 1.54-2.28 3.14v6.04H9Z" />
  ),
};

export default function Icon({ name, size = 20, className = "" }) {
  const isSolid = name in solid;
  const shape = isSolid ? solid[name] : stroke[name];
  if (!shape) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      fill={isSolid ? "currentColor" : "none"}
      stroke={isSolid ? "none" : "currentColor"}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shape}
    </svg>
  );
}
