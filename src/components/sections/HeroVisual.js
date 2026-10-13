import React from "react";

const layers = [
  { label: "Interface", detail: "Product UI and user flows", tech: ["React", "TypeScript"] },
  { label: "API", detail: "Endpoints and business logic", tech: ["FastAPI", "Express"] },
  { label: "Data", detail: "Models and workflows", tech: ["PostgreSQL", "MongoDB"] },
  { label: "AI", detail: "Model calls inside the feature", tech: ["OpenAI API"] },
];

// The last entry repeats the first so the rotation loops without a jump.
const building = ["AI voice agents", "Colosseum hiring platform", "AI voice agents"];

// Decorative diagram of a feature travelling through the stack.
export default function HeroVisual() {
  return (
    <div
      role="img"
      aria-label="Diagram of a product feature passing through four layers: interface, API, data, and AI"
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <div aria-hidden="true" className="beam relative overflow-hidden rounded-2xl bg-night-line p-px shadow-lift">
        <div className="relative rounded-[0.9375rem] bg-night p-1.5">
          <div className="flex items-center gap-1.5 px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
            <span className="ml-3 font-mono text-xs text-night-mute">feature / end-to-end</span>
          </div>

          <ol className="rounded-xl bg-night-raised p-4 sm:p-5">
            {layers.map((layer, index) => (
              <li key={layer.label} className="relative flex gap-4 pb-5 last:pb-0">
                {index < layers.length - 1 && (
                  <span className="absolute bottom-0 left-[0.4375rem] top-4 w-px bg-night-line" />
                )}
                <span className="relative mt-1 flex h-[0.9375rem] w-[0.9375rem] shrink-0 items-center justify-center rounded-full border border-night-line bg-night">
                  <span className={`flow-pulse flow-step-${index + 1} h-1.5 w-1.5 rounded-full bg-accent-bright`} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent-bright">
                      {layer.label}
                    </span>
                    <span className="text-xs text-night-mute">{layer.detail}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {layer.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-night-line bg-night px-2 py-1 font-mono text-xs text-night-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex items-center justify-between gap-2 px-3 py-3 font-mono text-xs leading-4 text-night-mute">
            <span>now building</span>
            <span className="h-4 overflow-hidden text-right text-night-text">
              <span className="rotator-track flex flex-col">
                {building.map((item, index) => (
                  <span key={index} className="h-4 whitespace-nowrap">
                    {item}
                  </span>
                ))}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
