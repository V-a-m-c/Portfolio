import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../ui/Icon";
import useActiveSection from "../../hooks/useActiveSection";
import { navLinks, profile } from "../../data/profile";

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const activeId = useActiveSection(sectionIds);
  const onHome = pathname === "/";

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Slide one shared pill under the active link instead of restyling each link.
  const listRef = useRef(null);
  const indicatorRef = useRef(null);
  useLayoutEffect(() => {
    const list = listRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return undefined;
    const place = () => {
      const link = list.querySelector('[aria-current="location"]');
      indicator.style.opacity = link ? "1" : "0";
      if (!link) return;
      indicator.style.width = `${link.offsetWidth}px`;
      indicator.style.transform = `translateX(${link.offsetLeft}px)`;
    };
    place();
    window.addEventListener("resize", place);
    if (document.fonts) document.fonts.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [activeId, onHome]);

  const closeMenu = () => setMenuOpen(false);
  const isActive = (id) => onHome && activeId === id;

  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 rounded-full pl-0.5 pr-2">
          <img
            src={profile.photo}
            alt="Portrait of Vamsi Korla"
            width="40"
            height="40"
            decoding="async"
            className="h-9 w-9 rounded-full bg-night object-cover ring-1 ring-line ring-offset-2 ring-offset-paper sm:h-10 sm:w-10"
          />
          <span className="text-[0.9375rem] font-semibold tracking-tight">{profile.name}</span>
        </Link>

        <div ref={listRef} className="relative hidden lg:block">
          <span
            ref={indicatorRef}
            aria-hidden="true"
            className="nav-indicator pointer-events-none absolute inset-y-0 left-0 rounded-full bg-surface opacity-0 shadow-card"
          />
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/#${link.id}`}
                  aria-current={isActive(link.id) ? "location" : undefined}
                  className={`relative block rounded-full px-3 py-2 text-sm transition-colors duration-200 hover:text-ink ${
                    isActive(link.id) ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Link to={profile.resumePath} className="btn btn-secondary hidden sm:inline-flex">
            <Icon name="file" size={16} />
            View Resume
          </Link>
          <Link to="/#contact" className="btn btn-primary btn-shine hidden lg:inline-flex">
            Hire me
          </Link>
          <button
            type="button"
            className="icon-btn lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>
      <span aria-hidden="true" className="scroll-progress" />

      {menuOpen && (
        <div id="mobile-menu" className="pop-in border-t border-line bg-paper lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/#${link.id}`}
                  onClick={closeMenu}
                  aria-current={isActive(link.id) ? "location" : undefined}
                  className={`flex min-h-[2.75rem] items-center rounded-lg px-3 text-base ${
                    isActive(link.id) ? "font-medium text-accent" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 grid grid-cols-2 gap-2 border-t border-line pt-4">
              <Link to={profile.resumePath} onClick={closeMenu} className="btn btn-secondary px-3">
                <Icon name="file" size={16} />
                View Resume
              </Link>
              <Link to="/#contact" onClick={closeMenu} className="btn btn-primary">
                Hire me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
