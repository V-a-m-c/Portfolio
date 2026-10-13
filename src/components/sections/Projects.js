import React, { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
import { projects } from "../../data/projects";

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <div className="container-page">
        <SectionHeading id="projects-title" eyebrow="Projects" title="Products I have helped build.">
          Three professional products and one personal project. The professional work is private, so those
          case studies describe my contribution without product screens.
        </SectionHeading>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index % 2} onOpen={setOpenProject} />
          ))}
        </ul>
      </div>
      {openProject && (
        <ProjectDialog key={openProject.id} project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </section>
  );
}
