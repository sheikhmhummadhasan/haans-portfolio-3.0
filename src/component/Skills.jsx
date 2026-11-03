"use client";

import SectionTitle from "./SectionTitle";

const skills = [
  ["HTML", 95],
  ["CSS", 90],
  ["JavaScript", 85],
  ["React", 85],
  ["Next.js", 80],
  ["Node.js", 84],
  ["Tailwind CSS", 90],
];

const tools = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Git",
  "GitHub",
  "Figma",
  "VS Code",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-neutral-100 px-6 py-32 text-neutral-950 md:px-12 lg:px-16"
    >
      <div className="mb-16">
        <SectionTitle k="What I do best" t="Skills" />
      </div>

      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-8">
          {skills.map(([skill, value]) => (
            <div key={skill} className="reveal group">
              <div className="mb-3 flex justify-between font-medium">
                <span>{skill}</span>
                <span>{value}%</span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-neutral-300">
                <div
                  className="skill-bar h-full rounded-full bg-neutral-950"
                  style={{ "--w": `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="reveal flex flex-wrap content-start gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-neutral-400 px-5 py-3 text-sm transition duration-300 hover:-translate-y-1 hover:bg-neutral-950 hover:text-white"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;