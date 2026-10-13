import React from "react";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import ProjectVisual from "./ProjectVisual";
import { CATEGORY } from "../../data/projects";

export default function ProjectCard({ project, delay, onOpen }) {
  return (
    <Reveal as="li" delay={delay} className="flex">
      <article className="card group relative flex w-full flex-col overflow-hidden transition duration-300 ease-out hover:-translate-y-1 hover:border-ink-mute hover:shadow-lift focus-within:border-ink-mute">
        <div className="visual-reveal overflow-hidden border-b border-line">
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus-within:scale-[1.03]">
            <ProjectVisual visual={project.visual} />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
            <span
              className={`rounded-full px-2.5 py-0.5 font-medium ${
                project.category === "professional" ? "bg-accent-soft text-accent-deep" : "bg-paper text-ink-soft"
              }`}
            >
              {CATEGORY[project.category]}
            </span>
            {project.category === "professional" && <span className="text-ink-mute">{project.org}</span>}
          </p>
          <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight">{project.name}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{project.description}</p>
          <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink after:absolute after:inset-0 after:content-['']"
            >
              View case study
              <span className="sr-only">: {project.name}</span>
              <Icon name="arrow-right" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
