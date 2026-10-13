import React from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";
import ExternalLink from "../ui/ExternalLink";
import HeroVisual from "./HeroVisual";
import usePauseOffscreen from "../../hooks/usePauseOffscreen";
import { profile } from "../../data/profile";

export default function Hero() {
  const sectionRef = usePauseOffscreen();

  return (
    <section ref={sectionRef} aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="dot-grid absolute inset-0" />
      </div>
      <div className="container-page relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-24">
        <div>
          <p className="enter inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-3 pr-4 text-[0.8125rem] leading-5 text-ink-soft">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="status-ping absolute inset-0 rounded-full bg-accent" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </p>

          {/* One heading carries the name, role, and headline for search engines and screen readers. */}
          <h1 id="hero-title" className="mt-7">
            <span className="eyebrow enter enter-1 block">
              {profile.name} · {profile.title} · {profile.focus}
            </span>{" "}
            <span className="enter-rise mt-4 block font-display text-[2.625rem] leading-[1.04] tracking-[-0.01em] text-ink sm:text-6xl lg:text-[4.25rem]">
              Building <em className="mark text-accent">intelligent products</em> from frontend to backend.
            </span>
          </h1>
          <p className="lead enter enter-2 mt-6 max-w-xl">{profile.intro}</p>

          <div className="enter enter-3 mt-8 flex flex-wrap items-center gap-3">
            <Link to="/#projects" className="btn btn-primary">
              Explore My Work
              <Icon name="arrow-right" size={16} className="btn-arrow" />
            </Link>
            <Link to={profile.resumePath} className="btn btn-secondary">
              <Icon name="file" size={16} />
              View Resume
            </Link>
            <span className="flex items-center gap-2 sm:ml-2">
              <ExternalLink href={profile.github} className="icon-btn" aria-label="GitHub profile">
                <Icon name="github" />
              </ExternalLink>
              <ExternalLink href={profile.linkedin} className="icon-btn" aria-label="LinkedIn profile">
                <Icon name="linkedin" />
              </ExternalLink>
            </span>
          </div>
        </div>

        <div className="enter enter-4">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
