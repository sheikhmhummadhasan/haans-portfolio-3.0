
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    _id: "project-1",
    title: "StudyNook",
    category: "Full Stack",
    description:
      "A modern study room booking platform where students can explore rooms, make reservations, and manage their bookings.",
    image: "/projects/studynook.png",
    technologies: ["Next.js", "Express.js", "MongoDB", "Better Auth"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    _id: "project-2",
    title: "HairLoop",
    category: "Full Stack",
    description:
      "A modern job platform connecting job seekers with recruiters through an intuitive dashboard and job management experience.",
    image: "/projects/hairloop.png",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Better Auth"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    _id: "project-3",
    title: "Wanderlust",
    category: "Full Stack",
    description:
      "A travel-focused web application designed to help users discover destinations and manage their travel bookings.",
    image: "/projects/wanderlust.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    _id: "project-4",
    title: "Personal Portfolio",
    category: "Frontend",
    description:
      "A minimalist personal portfolio showcasing my skills, selected projects, services, and development journey.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
];

const categories = ["All", "Full Stack", "Frontend"];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#1A1A1A]">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#737373]">
              Selected works
            </p>

            <h1 className="font-display text-5xl font-semibold leading-[1.1] tracking-tight sm:text-7xl">
              Projects &
              <span className="text-[#88847D]"> creations.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#737373]">
              A collection of projects Ive built while exploring ideas,
              solving problems, and improving my development skills.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#737373]">
            <Layers3 size={19} />
            <span>{projects.length} Selected Projects</span>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3 border-b border-[#D6D3CD] pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-6 py-3 text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                  : "border-[#D6D3CD] bg-[#FAF9F6] text-[#737373] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <article key={project._id} className="reveal group">
              <div className="relative aspect-[16/10] overflow-hidden border border-[#D6D3CD] bg-[#EBE6DE]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-3xl font-semibold text-[#A7A198]">
                    {project.title}
                  </span>
                </div>

                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="relative z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {project.featured && (
                  <span className="absolute left-5 top-5 z-20 bg-[#1A1A1A] px-4 py-2 text-xs uppercase tracking-wider text-white">
                    Featured
                  </span>
                )}

                <span className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F2EB] text-[#1A1A1A] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={21} />
                </span>
              </div>

              <div className="mt-7 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#737373]">
                    0{index + 1} / {project.category}
                  </p>

                  <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                    {project.title}
                  </h2>
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="rounded-full border border-[#D6D3CD] p-3 transition-colors hover:bg-[#1A1A1A] hover:text-white"
                    >

                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="rounded-full border border-[#D6D3CD] p-3 transition-colors hover:bg-[#1A1A1A] hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#737373]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#D6D3CD] px-3 py-2 text-xs text-[#737373]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-[#737373]">
            No projects found in this category.
          </div>
        )}
      </section>

      <section className="bg-[#1A1A1A] px-6 py-24 text-[#F5F2EB]">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Have an idea?
          </p>

          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Lets turn your next idea into reality.
            </h2>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 self-start border-b border-white/50 pb-3 text-sm hover:border-white md:self-auto"
            >
              Start a project
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
