import React, { useEffect, useRef } from "react";
import Icon from "../ui/Icon";
import ExternalLink from "../ui/ExternalLink";
import ProjectVisual from "./ProjectVisual";
import { CATEGORY } from "../../data/projects";

// Case study in a native <dialog>, which provides focus trapping, Escape to
// close, and focus restoration without extra code.
export default function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }, []);

  // Closing through the element lets the browser restore focus to the card.
  const close = () => {
    const dialog = dialogRef.current;
    if (dialog && typeof dialog.close === "function" && dialog.open) dialog.close();
    else onClose();
  };

  const closeOnBackdrop = (event) => {
    if (event.target === dialogRef.current) close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="case-dialog pop-in"
      aria-labelledby="case-title"
      onClose={onClose}
      onClick={closeOnBackdrop}
    >
      <div className="relative">
        <button
          type="button"
          onClick={close}
          className="icon-btn absolute right-3 top-3 z-10 shadow-card"
          aria-label="Close case study"
        >
          <Icon name="close" />
        </button>
        <div className="border-b border-line">
          <ProjectVisual visual={project.visual} eager />
        </div>

        <div className="p-6 sm:p-8">
          <p className="eyebrow">
            {CATEGORY[project.category]}
            {project.category === "professional" && ` · ${project.org}`}
          </p>
          <h2 id="case-title" className="mt-2 font-display text-3xl leading-tight sm:text-4xl">
            {project.name}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">{project.description}</p>

          <div className="mt-7 grid gap-7 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">My contribution</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{project.contribution}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Key features</h3>
              <ul className="mt-2 space-y-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Icon name="check" size={16} className="mt-1 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="mt-7 text-sm font-semibold">Technology</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          {project.links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <ExternalLink key={link.href} href={link.href} className="btn btn-primary">
                  <Icon name={link.icon} size={16} />
                  {link.label}
                  <Icon name="arrow-up-right" size={16} />
                </ExternalLink>
              ))}
            </div>
          )}

          {project.privateNote && (
            <p className="mt-7 flex gap-2.5 rounded-xl bg-paper p-4 text-sm leading-relaxed text-ink-soft">
              <Icon name="lock" size={16} className="mt-0.5 text-ink-mute" />
              <span>{project.privateNote} The visual above is an illustration, not a product screenshot.</span>
            </p>
          )}
        </div>
      </div>
    </dialog>
  );
}
