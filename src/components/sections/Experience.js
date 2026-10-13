import React from "react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { experience } from "../../data/experience";

function Role({ role }) {
  return (
    <Reveal as="li" className="relative grid gap-4 pb-12 pl-8 last:pb-0 md:grid-cols-[13rem_1fr] md:gap-10 md:pl-10">
      <span aria-hidden="true" className="absolute bottom-0 left-[0.3125rem] top-2 w-px bg-line">
        <span className="timeline-fill absolute inset-0 bg-accent" />
      </span>
      <span
        aria-hidden="true"
        className={`milestone absolute left-0 top-1.5 h-[0.6875rem] w-[0.6875rem] rounded-full border-2 ${
          role.current ? "border-accent bg-accent" : "border-accent bg-paper"
        }`}
      />

      <div className="text-sm">
        <p className="font-medium text-ink">{role.period}</p>
        <p className="mt-1 text-ink-mute">{role.arrangement}</p>
        {role.current && (
          <p className="mt-3 inline-flex rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent-deep">
            Current role
          </p>
        )}
      </div>

      <article className="card p-6 sm:p-7">
        <h3 className="text-lg font-semibold leading-snug">{role.role}</h3>
        <p className="mt-0.5 text-accent">{role.company}</p>
        <ul className="mt-4 space-y-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
          {role.points.map((point) => (
            <li key={point} className="relative pl-5">
              <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2.5 bg-ink-mute" />
              {point}
            </li>
          ))}
        </ul>
        <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
          {role.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section border-y border-line bg-surface/60">
      <div className="container-page">
        <SectionHeading id="experience-title" eyebrow="Experience" title="Three roles, all on AI products.">
          A paid internship that grew into full-stack roles at AI-product startups.
        </SectionHeading>
        <ol className="mt-12">
          {experience.map((role) => (
            <Role key={role.id} role={role} />
          ))}
        </ol>
      </div>
    </section>
  );
}
