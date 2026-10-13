import React from "react";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { about } from "../../data/profile";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <SectionHeading id="about-title" eyebrow="About Vamsi Korla" title="From intern to full-stack product work." />
            <Reveal className="mt-6 max-w-prose space-y-4 text-base leading-relaxed text-ink-soft">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </div>

          <Reveal delay={1} className="card self-start p-6 sm:p-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">At a glance</h3>
            <dl className="mt-4 divide-y divide-line">
              {about.facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 text-sm">
                  <dt className="text-ink-mute">{fact.label}</dt>
                  <dd className="font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {about.highlights.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index} className="rounded-2xl border border-line p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
