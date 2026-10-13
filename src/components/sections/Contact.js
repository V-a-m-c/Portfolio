import React from "react";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import ExternalLink from "../ui/ExternalLink";
import ContactForm, { isContactFormConfigured } from "./ContactForm";
import { profile } from "../../data/profile";

const details = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: "pin", label: "Location", value: profile.location },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-night py-16 text-night-text sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-bright">Contact</p>
          <h2 id="contact-title" className="mt-3 font-display text-4xl leading-[1.08] text-white sm:text-5xl">
            Hiring for a full-stack role? Let's talk.
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-night-mute sm:text-lg">
            I'm open to full-stack roles in Hyderabad, Bengaluru, or remote. If your team is building a
            product and needs someone who works across the frontend and backend, send me a note.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-on-night">
              <Icon name="mail" size={16} />
              Email me
            </a>
            <ExternalLink href={profile.linkedin} className="btn btn-ghost-night">
              <Icon name="linkedin" size={16} />
              LinkedIn
            </ExternalLink>
            <ExternalLink href={profile.github} className="btn btn-ghost-night">
              <Icon name="github" size={16} />
              GitHub
            </ExternalLink>
          </div>

          <dl className="mt-10 space-y-4 border-t border-night-line pt-8 text-sm">
            {details.map((detail) => (
              <div key={detail.label} className="flex items-center gap-3">
                <Icon name={detail.icon} size={18} className="text-night-mute" />
                <dt className="sr-only">{detail.label}</dt>
                <dd className="min-w-0 break-words">
                  {detail.href ? (
                    <a href={detail.href} className="py-1 transition-colors hover:text-accent-bright">
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {isContactFormConfigured && (
          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        )}
      </div>
    </section>
  );
}
