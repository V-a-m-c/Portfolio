import { useEffect, useRef } from "react";

// Adds `is-offscreen` to an element while it is outside the viewport, which the
// stylesheet uses to pause its looping animations. Sets the class directly on
// the node so it never causes a render.
export default function usePauseOffscreen() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      node.classList.toggle("is-offscreen", !entry.isIntersecting);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
