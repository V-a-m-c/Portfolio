import { profile } from "../../data/profile";

// Prewritten lines for the assistant. The welcome is in the assistant's own
// voice; everything else is Vamsi's introduction in the first person, restating
// content that is already on the page so there is nothing for it to get wrong.
export const welcome = {
  id: "welcome",
  label: "AI assistant",
  sectionId: null,
  text: "Hi, I'm Vamsi's AI assistant. I can introduce him in his own words, with voice or captions only, or take you straight to any section of the portfolio.",
};

export const topics = [
  {
    id: "intro",
    label: "Meet Vamsi",
    sectionId: null,
    text: "Hi, I'm Vamsi Korla, a Full Stack Developer based in Andhra Pradesh, India. I have 1 year and 9 months of experience, including a paid internship, building web applications at AI-product startups. I work across React and TypeScript frontends, Node.js and Python backends, and PostgreSQL and MongoDB, and I integrate AI APIs into application workflows. Right now I'm a Junior Full-Stack Developer at Audena AI, and I'm open to opportunities in Hyderabad, Bengaluru, and remote.",
  },
  {
    id: "about",
    label: "About",
    sectionId: "about",
    text: "I started as a paid full-stack intern at NewOwl AI, beginning on the frontend and expanding into backend work. I then built features end to end at DhiAspire AI, and I'm now a Junior Full-Stack Developer at Audena AI.",
  },
  {
    id: "experience",
    label: "Experience",
    sectionId: "experience",
    text: "I've held three roles, all on AI products. At Audena AI, I work on an AI voice-agent platform and the Colosseum hiring platform. At DhiAspire AI, I built AI mock interviews, resume review, and candidate scoring. I began as a paid intern at NewOwl AI on a MERN-stack recruitment platform.",
  },
  {
    id: "projects",
    label: "Projects",
    sectionId: "projects",
    text: "There are four projects here. Three are professional products: AI voice agents and the Colosseum hiring platform at Audena AI, and an AI recruitment and interview platform at DhiAspire AI. The fourth, TeleHealth, is a personal doctor and patient consultation app. Select any card to open its case study.",
  },
  {
    id: "skills",
    label: "Skills",
    sectionId: "skills",
    text: "On the frontend, I work with React, TypeScript, Redux, and Tailwind CSS. On the backend, I use Node.js, Express, Python, and FastAPI, with PostgreSQL and MongoDB. I also work with Docker, GitHub Actions, and AWS, and I integrate the OpenAI API into application workflows.",
  },
  {
    id: "contact",
    label: "Contact",
    sectionId: "contact",
    text: `I'm open to opportunities in Hyderabad, Bengaluru, and remote. The fastest way to reach me is by email at ${profile.email}, or through LinkedIn. You can also open my resume from the navigation bar.`,
  },
];

// The guided tour walks the page sections in order.
export const tourOrder = ["about", "experience", "projects", "skills", "contact"];
