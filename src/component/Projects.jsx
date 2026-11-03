"use client";

import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const projects = [
  { n: "01", t: "StudyNook", k: "Full Stack Development", y: "2026" },
  { n: "02", t: "HairLoop", k: "Web Application", y: "2026" },
  { n: "03", t: "Wanderlust", k: "Travel Website", y: "2025" },
  { n: "04", t: "Portfolio", k: "Web Design & Development", y: "2026" },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-6 py-32 md:px-12 lg:px-16"
    >
      <div className="mb-16">
        <SectionTitle k="Selected work" t="Projects" />
      </div>

      <ul>
        {projects.map((project) => (
          <li
            key={project.n}
            className="reveal group border-t border-neutral-300 last:border-b"
          >
            <a
              href="#contact"
              className="flex items-center gap-4 py-8 transition-all duration-500 group-hover:bg-neutral-950 group-hover:px-6 group-hover:text-white md:gap-6"
            >
              <span className="text-sm opacity-60">{project.n}</span>

              <span className="flex-1 font-display text-2xl font-medium transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                {project.t}
              </span>

              <span className="hidden text-sm opacity-60 md:block">
                {project.k} · {project.y}
              </span>

              <ArrowUpRight className="h-7 w-7 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;