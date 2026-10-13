import { useEffect, useRef } from "react";

let sharedObserver = null;

function getObserver() {
  if (sharedObserver || typeof IntersectionObserver === "undefined") return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        sharedObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  return sharedObserver;
}

// Reveals an element the first time it scrolls into view. Toggles a class
// directly on the node, so scrolling never triggers React renders.
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = getObserver();
    if (!observer) {
      node.classList.add("is-visible");
      return undefined;
    }
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return ref;
}
