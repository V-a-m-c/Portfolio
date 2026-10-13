import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/ui/Icon";
import { profile } from "../data/profile";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { certifications, education, skillGroups } from "../data/skills";
import seo from "../data/seo.json";

const canonicalFor = (page) => `${seo.siteUrl}${page.path || "/"}`;

function Block({ title, children }) {
  return (
    <section className="mt-7">
      <h2 className="break-after-avoid-page border-b border-line pb-1.5 font-mono text-xs uppercase tracking-[0.16em] text-accent">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function Resume() {
  // Keep the tab title and canonical URL in step with the route when the page
  // is reached by in-app navigation. A direct visit gets these from the static
  // build/resume.html written by scripts/postbuild.js.
  useEffect(() => {
    const canonical = document.querySelector('link[rel="canonical"]');
    document.title = seo.resume.title;
    if (canonical) canonical.href = canonicalFor(seo.resume);
    return () => {
      document.title = seo.home.title;
      if (canonical) canonical.href = canonicalFor(seo.home);
    };
  }, []);

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="no-print mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3">
        <Link to="/" className="inline-flex min-h-[2.75rem] items-center gap-2 text-sm text-ink-soft hover:text-ink">
          <Icon name="chevron-left" size={16} />
          Back to portfolio
        </Link>
        <button type="button" onClick={() => window.print()} className="btn btn-primary">
          <Icon name="printer" size={16} />
          Print or save as PDF
        </button>
      </div>

      <article className="resume-sheet card mx-auto mt-5 max-w-3xl p-6 text-[0.9375rem] leading-relaxed sm:p-10">
        <header>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-1 text-base font-medium text-accent">
            {profile.title} | {profile.focus}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-soft">
            <li>{profile.location}</li>
            <li>
              <a href={`mailto:${profile.email}`} className="link-underline">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.phoneHref} className="link-underline">
                {profile.phone}
              </a>
            </li>
            <li>
              <a href={profile.github} className="link-underline">
                github.com/V-a-m-c
              </a>
            </li>
            <li>
              <a href={profile.linkedin} className="link-underline">
                linkedin.com/in/vamsi-korla-41220a23b
              </a>
            </li>
          </ul>
          <p className="mt-1 text-sm text-ink-soft">{profile.availability}.</p>
        </header>

        <Block title="Summary">
          <p className="text-ink-soft">{profile.summary}</p>
        </Block>

        <Block title="Experience">
          {experience.map((role) => (
            <div key={role.id} className="mt-4 break-inside-avoid-page first:mt-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  {role.role}, {role.company}
                </h3>
                <p className="text-sm text-ink-mute">
                  {role.period} · {role.arrangement}
                </p>
              </div>
              <ul className="mt-1.5 list-disc space-y-1 pl-5 text-ink-soft marker:text-ink-mute">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </Block>

        <Block title="Projects">
          {projects.map((project) => (
            <p key={project.id} className="mt-2 text-ink-soft first:mt-0">
              <strong className="font-semibold text-ink">
                {project.name}
                {project.category === "professional" ? ` (${project.org})` : " (personal project)"}:
              </strong>{" "}
              {project.description} <span className="text-ink-mute">{project.stack.join(", ")}.</span>
            </p>
          ))}
        </Block>

        <Block title="Technical skills">
          <dl className="space-y-1">
            {skillGroups.map((group) => (
              <div key={group.id} className="sm:grid sm:grid-cols-[12rem_1fr] sm:gap-3 print:grid print:grid-cols-[12rem_1fr] print:gap-3">
                <dt className="font-medium">{group.title}</dt>
                <dd className="text-ink-soft">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block title="Education">
          <p>
            <strong className="font-semibold">{education.degree}</strong>
            <span className="text-ink-soft">
              , {education.school} · {education.period} · {education.detail}
            </span>
          </p>
        </Block>

        <Block title="Certifications">
          <ul className="space-y-1 text-ink-soft">
            {certifications.map((certification) => (
              <li key={certification.name}>
                <strong className="font-semibold text-ink">{certification.name}</strong>, {certification.issuer}
                {certification.detail && ` · ${certification.detail}`}
              </li>
            ))}
          </ul>
        </Block>
      </article>
    </div>
  );
}
