import React from "react";
import useReveal from "../../hooks/useReveal";

const delays = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useReveal();

  return (
    <Tag ref={ref} className={`reveal ${delays[delay] || ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
