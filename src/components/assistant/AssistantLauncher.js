import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import Icon from "../ui/Icon";
import AssistantAvatar from "./AssistantAvatar";

// The panel, its script, and the speech hook are only downloaded on first open.
const AssistantPanel = lazy(() => import("./AssistantPanel"));

const TEASER_KEY = "assistant-teaser-dismissed";

function readTeaserDismissed() {
  try {
    return window.sessionStorage.getItem(TEASER_KEY) === "1";
  } catch (error) {
    return false;
  }
}

export default function AssistantLauncher() {
  const [open, setOpen] = useState(false);
  const [teaserDismissed, setTeaserDismissed] = useState(readTeaserDismissed);
  const launcherRef = useRef(null);
  const wasOpenRef = useRef(false);

  // Return focus to the launcher after the panel closes.
  useEffect(() => {
    if (!open && wasOpenRef.current && launcherRef.current) launcherRef.current.focus();
    wasOpenRef.current = open;
  }, [open]);

  const dismissTeaser = () => {
    setTeaserDismissed(true);
    try {
      window.sessionStorage.setItem(TEASER_KEY, "1");
    } catch (error) {
      // Storage can be unavailable in private modes; the teaser just reappears.
    }
  };

  const openPanel = () => {
    dismissTeaser();
    setOpen(true);
  };

  if (open) {
    return (
      <Suspense fallback={null}>
        <AssistantPanel onClose={() => setOpen(false)} />
      </Suspense>
    );
  }

  return (
    <div className="no-print fixed bottom-4 right-4 z-50 flex items-end gap-3 sm:bottom-5 sm:right-5">
      {!teaserDismissed && (
        <div className="enter enter-late card relative hidden max-w-[16.5rem] p-4 pr-9 sm:block">
          <p className="text-sm leading-relaxed text-ink-soft">
            Hi, I'm Vamsi's AI assistant. Want a short spoken introduction or a tour of his work?
          </p>
          <button type="button" onClick={openPanel} className="mt-2 py-1 text-sm font-medium text-accent">
            Meet Vamsi
          </button>
          <button
            type="button"
            onClick={dismissTeaser}
            aria-label="Dismiss assistant message"
            className="absolute right-1 top-1 flex h-9 w-9 items-center justify-center rounded-full text-ink-mute hover:text-ink"
          >
            <Icon name="close" size={16} />
          </button>
        </div>
      )}
      <button
        ref={launcherRef}
        type="button"
        onClick={openPanel}
        aria-label="Open portfolio assistant"
        aria-haspopup="dialog"
        className="launcher-pulse relative rounded-full shadow-lift ring-4 ring-paper transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
      >
        <AssistantAvatar size={56} />
      </button>
    </div>
  );
}
