
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Database,
  Palette,
  Wrench,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
    skills: [
      { name: "HTML", level: "Advanced", percentage: 90 },
      { name: "CSS", level: "Advanced", percentage: 85 },
      { name: "JavaScript", level: "Intermediate", percentage: 70 },
      { name: "React.js", level: "Intermediate", percentage: 75 },
      { name: "Next.js", level: "Intermediate", percentage: 70 },
      { name: "Tailwind CSS", level: "Advanced", percentage: 85 },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend Development",
    description: "Developing APIs and server-side applications.",
    icon: Database,
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 65 },
      { name: "Express.js", level: "Intermediate", percentage: 65 },
      { name: "MongoDB", level: "Intermediate", percentage: 65 },
      { name: "REST API", level: "Intermediate", percentage: 70 },
    ],
  },
  {
    id: "design",
    number: "03",
    title: "Design & UI",
    description: "Creating clean layouts and user-friendly experiences.",
    icon: Palette,
    skills: [
      { name: "Responsive Design", level: "Advanced", percentage: 85 },
      { name: "UI Implementation", level: "Intermediate", percentage: 75 },
      { name: "Figma", level: "Beginner", percentage: 45 },
    ],
  },
  {
    id: "tools",
    number: "04",
    title: "Tools & Workflow",
    description: "Tools I use to build and manage projects.",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Intermediate", percentage: 70 },
      { name: "GitHub", level: "Intermediate", percentage: 75 },
      { name: "VS Code", level: "Advanced", percentage: 90 },
      { name: "Vercel", level: "Intermediate", percentage: 70 },
    ],
  },
];

const learningSkills = [
  "TypeScript",
  "Advanced Backend",
  "Database Design",
  "System Design",
];

const SkillsPage = () => {
  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#1A1A1A]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#737373]">
            My capabilities
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[1.1] tracking-tight sm:text-7xl">
            Skills &
            <span className="text-[#88847D]"> expertise.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#737373]">
            A collection of technologies, tools, and skills I use to turn
            ideas into functional and meaningful digital experiences.
            Im always learning and improving my craft.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="reveal border border-[#D6D3CD] bg-[#FAF9F6] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs tracking-[0.25em] text-[#737373]">
                      {category.number} / EXPERTISE
                    </span>

                    <h2 className="mt-4 font-display text-2xl font-semibold">
                      {category.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#737373]">
                      {category.description}
                    </p>
                  </div>

                  <div className="rounded-full border border-[#D6D3CD] p-4">
                    <Icon size={23} strokeWidth={1.4} />
                  </div>
                </div>

                <div className="mt-10 space-y-7">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>

                        <span className="text-xs text-[#737373]">
                          {skill.level}
                        </span>
                      </div>

                      <div className="h-[3px] w-full overflow-hidden bg-[#E5E1D9]">
                        <div
                          className="h-full bg-[#1A1A1A] transition-all duration-1000"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#D6D3CD] bg-[#EBE6DE] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <Sparkles size={20} />
            <p className="text-sm uppercase tracking-[0.3em] text-[#737373]">
              Always growing
            </p>
          </div>

          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Currently exploring & learning.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#737373]">
            Technology never stops evolving. These are some of the areas
            Im currently exploring to become a better developer.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {learningSkills.map((skill) => (
              <span
                key={skill}
                className="border border-[#D6D3CD] bg-[#F5F2EB] px-5 py-3 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-6 py-24 text-[#F5F2EB]">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Lets build something
          </p>

          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Have a project that needs these skills?
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

export default SkillsPage;
