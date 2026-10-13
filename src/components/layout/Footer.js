import React from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";
import ExternalLink from "../ui/ExternalLink";
import { navLinks, profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="no-print bg-night text-night-mute">
      <div className="container-page flex flex-col gap-6 border-t border-night-line py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={`/#${link.id}`} className="py-2 transition-colors hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ExternalLink href={profile.github} className="py-2 transition-colors hover:text-white">
              GitHub
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={profile.linkedin} className="py-2 transition-colors hover:text-white">
              LinkedIn
            </ExternalLink>
          </li>
        </ul>
        <a href="#top" className="inline-flex items-center gap-2 py-2 transition-colors hover:text-white">
          Back to top
          <Icon name="arrow-up" size={16} />
        </a>
      </div>
    </footer>
  );
}
