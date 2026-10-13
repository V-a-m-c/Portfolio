import React from "react";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { skillGroups } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section border-y border-line bg-surface/60">
      <div className="container-page">
        <SectionHeading id="skills-title" eyebrow="Skills" title="The stack I work across.">
          Grouped by where each tool sits in a product, from the interface to deployment.
        </SectionHeading>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              as="li"
              key={group.id}
              delay={index % 3}
              className="card group p-6 transition-colors duration-300 hover:border-accent/50 focus-within:border-accent/50"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon name={group.icon} />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <ul className="stagger mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
