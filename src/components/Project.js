import React from "react";
import "./Project.css"; // Ensure you create this CSS file for custom styles
import telehealth from "./Telehealth.png";
import news from "./News.png";
import port from "./Port.png";

// Project data
const projectData = [
  {
    id: 1,
    title: "Telehealth Application",
    description:
      "A comprehensive app for doctor-patient interactions, including video calls, scheduling, and more.",
    image: telehealth,
    link: "https://lovelyf.netlify.app/", // Add project link
  },
  {
    id: 2,
    title: "News_Updates",
    description:
      "A news aggregator platform that displays real-time updates from various sources using a REST API.",
    image: news,
    link: "https://github.com/V-a-m-c/News_Updates", // Add project link
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal website showcasing skills and projects, built with React and Tailwind CSS.",
    image: port,
    link: "#", // Add project link
  },
];

const Project = () => {
  return (
    <div className="projects-section py-12 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-blue-950">My Projects</h1>
        <div className="flex justify-center flex-wrap gap-8">
          {projectData.map((project) => (
            <div
              className="project-card bg-white shadow-lg rounded-lg overflow-hidden max-w-sm flex flex-col"
              key={project.id}
            >
              <div className="image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-48 object-cover"
                />
              </div>
              <div className="project-info p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="project-title text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="project-description text-gray-700 mb-4">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  className="project" target="blank"
                >
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                   View Project
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
