import telehealthShot from "../assets/telehealth.png";

export const CATEGORY = {
  professional: "Professional product",
  personal: "Personal project",
};

// `visual` is either an illustration key (private products, no screenshots
// published) or a real screenshot.
export const projects = [
  {
    id: "audena-voice",
    name: "AI Voice Agents",
    org: "Audena AI",
    category: "professional",
    tagline: "Voice agents that handle customer calls end to end.",
    description:
      "An AI voice-agent platform that supports customer calls and workflows such as orders, bookings, and escalation to a human.",
    contribution:
      "I develop frontend and backend features for the platform: React and TypeScript interfaces, and the APIs, business logic, and database workflows behind them in Python, FastAPI, and PostgreSQL.",
    features: [
      "Customer call handling",
      "Order workflows",
      "Booking workflows",
      "Escalation to a human agent",
    ],
    stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Postman"],
    visual: { type: "illustration", key: "voice" },
    links: [],
    privateNote:
      "Private commercial product. Source code and product screens are not public.",
  },
  {
    id: "colosseum",
    name: "Colosseum",
    org: "Audena AI",
    category: "professional",
    tagline: "An AI-driven hiring platform built around challenges.",
    description:
      "An AI-driven hiring platform that connects candidate assessment, hiring challenges, jobs, applications, and hiring workflows.",
    contribution:
      "Frontend and backend development across the product: APIs, candidate workflows, hiring pipelines, leaderboards, Pulse, and escrow payment functionality.",
    features: [
      "Job publishing and applications",
      "Hiring and bounty challenges",
      "Hiring pipelines and candidate management",
      "Leaderboards and Pulse",
      "Escrow payments",
    ],
    stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    visual: { type: "illustration", key: "hiring" },
    links: [],
    privateNote:
      "Private commercial product. Source code and product screens are not public.",
  },
  {
    id: "dhiaspire",
    name: "AI Recruitment & Interview Platform",
    org: "DhiAspire AI",
    category: "professional",
    tagline: "Placement readiness with AI interviews and resume review.",
    description:
      "An AI-powered recruitment and placement-readiness platform with mock interviews, resume review, candidate scoring, and assessments.",
    contribution:
      "I owned features end to end, including the AI mock-interview workflow that uses OpenAI APIs for automated assessment and structured feedback, plus authentication and role-based access control.",
    features: [
      "AI mock interviews with structured feedback",
      "AI resume review",
      "JD-based candidate scoring and shortlisting",
      "Assessments and coding practice",
      "JWT authentication and role-based access",
    ],
    stack: ["OpenAI API", "JWT", "RBAC", "Docker", "GitHub Actions"],
    visual: { type: "illustration", key: "interview" },
    links: [],
    privateNote:
      "Private commercial product. Source code and product screens are not public.",
  },
  {
    id: "telehealth",
    name: "TeleHealth",
    org: "Personal project",
    category: "personal",
    tagline: "Doctor–patient consultations over video.",
    description:
      "A doctor–patient consultation platform with appointment scheduling and video consultations.",
    contribution:
      "Designed and built the application: the React and Tailwind CSS interface, Firebase-backed data and access, ZegoCloud video calls, and Google Maps location support.",
    features: [
      "Appointment scheduling",
      "Video consultations",
      "Protected routes",
      "Doctor registration",
      "Location support",
      "Super-admin approval workflow",
    ],
    stack: ["React", "Tailwind CSS", "Firebase", "ZegoCloud", "Google Maps API"],
    visual: {
      type: "image",
      src: telehealthShot,
      width: 1345,
      height: 654,
      alt: "TeleHealth landing page with navigation, a hero heading, and three feature cards",
    },
    links: [
      { label: "Source on GitHub", href: "https://github.com/V-a-m-c/TeleHealth", icon: "github" },
    ],
  },
];
