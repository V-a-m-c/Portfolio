import React from "react";
import Reveal from "./Reveal";

export default function SectionHeading({ id, eyebrow, title, children }) {
  return (
    <Reveal className="max-w-prose">
      <p className="eyebrow flex items-center gap-3">
        <span aria-hidden="true" className="draw-x h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2 id={id} className="section-title mt-3">
        {title}
      </h2>
      {children && <p className="lead mt-4">{children}</p>}
    </Reveal>
  );
}
