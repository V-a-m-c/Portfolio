// Single source of truth for personal details used across the site.
export const SITE_URL = "https://vamsiprofile.netlify.app";

export const profile = {
  name: "Vamsi Korla",
  firstName: "Vamsi",
  title: "Full Stack Developer",
  focus: "AI Applications",
  location: "Andhra Pradesh, India",
  availability: "Open to Hyderabad, Bengaluru, and remote opportunities",
  email: "korlavamsi74@gmail.com",
  phone: "+91 7386272337",
  phoneHref: "tel:+917386272337",
  github: "https://github.com/V-a-m-c",
  linkedin: "https://www.linkedin.com/in/vamsi-korla-41220a23b/",
  // Header avatar, cropped from public/Me.png. PUBLIC_URL keeps the path
  // correct for the relative "homepage" used by the Netlify build.
  photo: `${process.env.PUBLIC_URL}/me-avatar.webp`,
  // In-app resume page. To serve a PDF instead, add it to /public and point
  // this at the file (e.g. "/Vamsi_Korla_Resume.pdf").
  resumePath: "/resume",
  headline: "Building intelligent products from frontend to backend.",
  intro:
    "I'm Vamsi Korla, a Full Stack Developer building web applications and AI-powered product experiences at AI-product startups.",
  summary:
    "Full Stack Developer with 1 year and 9 months of experience, including a paid internship, building web applications at AI-product startups. Experienced in React and TypeScript frontends, Node.js/Express and Python/FastAPI backends, PostgreSQL and MongoDB, end-to-end feature development, and integrating AI APIs into application workflows.",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I started as a paid full-stack intern at NewOwl AI, working on the frontend of an AI-powered recruitment platform, and expanded into backend development on the same product. Since then I have worked as a full-stack developer at DhiAspire AI and now at Audena AI.",
    "Most of my work is building complete product features: the React and TypeScript interface, the Node.js/Express or Python/FastAPI service behind it, and the PostgreSQL or MongoDB workflows that hold it together.",
    "The products have all been AI-driven: recruitment and placement-readiness platforms with mock interviews, resume review, and candidate scoring, and now an AI voice-agent platform and the Colosseum hiring platform at Audena AI.",
  ],
  highlights: [
    {
      icon: "layers",
      title: "End-to-end features",
      text: "From the interface to the API, business logic, and database workflow behind it.",
    },
    {
      icon: "sparkles",
      title: "AI in the workflow",
      text: "Integrating AI APIs into real product flows such as interviews, resume review, and scoring.",
    },
    {
      icon: "check",
      title: "Requirements to software",
      text: "Turning product requirements into reliable, usable features, tested end to end.",
    },
  ],
  facts: [
    { label: "Experience", value: "1 yr 9 mos, including a paid internship" },
    // Non-breaking spaces keep "(UAE · Remote)" together when the line wraps.
    { label: "Currently", value: "Junior Full-Stack Developer, Audena AI (UAE · Remote)" },
    { label: "Based in", value: "Andhra Pradesh, India" },
    { label: "Open to", value: "Hyderabad, Bengaluru, remote" },
  ],
};
