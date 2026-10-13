import React from "react";

export default function ExternalLink({ href, className = "", children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </a>
  );
}
