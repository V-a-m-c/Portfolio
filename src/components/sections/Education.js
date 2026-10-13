import React from "react";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { certifications, education } from "../../data/skills";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section">
      <div className="container-page">
        <SectionHeading id="education-title" eyebrow="Education and certifications" title="Foundations." />
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr]">
          <Reveal as="article" className="card p-6 sm:p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon name="graduation" />
            </span>
            <h3 className="mt-4 text-lg font-semibold leading-snug">{education.degree}</h3>
            <p className="mt-1 text-ink-soft">{education.school}</p>
            <p className="mt-4 flex flex-wrap gap-2">
              <span className="chip">{education.period}</span>
              <span className="chip">{education.detail}</span>
            </p>
          </Reveal>

          {certifications.map((certification, index) => (
            <Reveal as="article" key={certification.name} delay={index + 1} className="card p-6 sm:p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon name="award" />
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{certification.name}</h3>
              <p className="mt-1 text-ink-soft">{certification.issuer}</p>
              {certification.detail && (
                <p className="mt-4">
                  <span className="chip">{certification.detail}</span>
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
