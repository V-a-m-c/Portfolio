import React from "react";
import Icon from "../ui/Icon";

const waveform = [3, 6, 10, 7, 12, 5, 9, 14, 8, 4, 11, 6, 13, 7, 3, 9, 5, 10, 4, 7];

function Tag({ children, active = false }) {
  return (
    <span
      className={`rounded-md border px-2 py-1 font-mono text-[0.6875rem] leading-none ${
        active ? "border-accent-bright/40 text-accent-bright" : "border-night-line text-night-text"
      }`}
    >
      {children}
    </span>
  );
}

function Lines({ widths }) {
  return widths.map((width, index) => (
    <span key={index} className={`block h-1.5 rounded-full bg-night-line ${width}`} />
  ));
}

function VoiceArt() {
  return (
    <div className="flex h-full flex-col justify-center gap-5 px-6">
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-night-line text-accent-bright">
          <Icon name="phone" size={18} />
        </span>
        <span className="relative h-14 min-w-0 flex-1">
          <svg
            viewBox="0 0 118 14"
            preserveAspectRatio="none"
            className="art-wave absolute inset-0 h-full w-full text-accent-bright"
          >
            {waveform.map((height, index) => (
              <rect
                key={index}
                x={index * 6}
                y={(14 - height) / 2}
                width="3"
                height={height}
                rx="1.5"
                fill="currentColor"
                opacity="0.8"
              />
            ))}
          </svg>
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-night-mute">
        <Tag active>call</Tag>
        <Icon name="arrow-right" size={12} />
        <Tag>order</Tag>
        <Tag>booking</Tag>
        <Icon name="arrow-right" size={12} />
        <Tag>human</Tag>
      </div>
    </div>
  );
}

function HiringArt() {
  return (
    <div className="grid h-full grid-cols-3 gap-3 p-5">
      {["jobs", "challenges", "leaderboard"].map((column, columnIndex) => (
        <div key={column} className="flex min-w-0 flex-col gap-2.5 rounded-lg border border-night-line bg-night p-3">
          <span className="truncate font-mono text-[0.6875rem] leading-none text-accent-bright">{column}</span>
          {columnIndex === 2 ? (
            ["w-full", "w-4/5", "w-3/5"].map((width, index) => (
              <span key={width} className="flex items-center gap-2">
                <span className="font-mono text-[0.625rem] leading-none text-night-mute">{index + 1}</span>
                <span className={`bar-grow block h-1.5 rounded-full bg-accent-bright/70 ${width}`} />
              </span>
            ))
          ) : (
            <Lines widths={["w-full", "w-2/3", "w-5/6", "w-1/2"]} />
          )}
        </div>
      ))}
    </div>
  );
}

function InterviewArt() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 px-6">
      <div className="w-3/5 space-y-1.5 rounded-lg rounded-bl-sm border border-night-line bg-night p-3">
        <span className="block font-mono text-[0.6875rem] leading-none text-night-mute">question</span>
        <Lines widths={["w-full", "w-2/3"]} />
      </div>
      <div className="ml-auto w-3/5 space-y-1.5 rounded-lg rounded-br-sm border border-night-line bg-night p-3">
        <span className="block font-mono text-[0.6875rem] leading-none text-night-mute">answer</span>
        <Lines widths={["w-full", "w-4/5"]} />
      </div>
      <div className="art-feedback flex items-center gap-2 rounded-lg border border-accent-bright/40 p-3 text-accent-bright">
        <Icon name="sparkles" size={14} />
        <span className="font-mono text-[0.6875rem] leading-none">structured feedback</span>
      </div>
    </div>
  );
}

const illustrations = { voice: VoiceArt, hiring: HiringArt, interview: InterviewArt };

export default function ProjectVisual({ visual, eager = false }) {
  if (visual.type === "image") {
    return (
      <img
        src={visual.src}
        alt={visual.alt}
        width={visual.width}
        height={visual.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="aspect-[16/9] w-full object-cover object-left-top"
      />
    );
  }

  const Art = illustrations[visual.key];
  return (
    <div aria-hidden="true" className="aspect-[16/9] w-full overflow-hidden bg-night-raised">
      <Art />
    </div>
  );
}
