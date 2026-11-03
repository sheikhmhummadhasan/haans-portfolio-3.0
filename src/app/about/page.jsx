
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/component/SectionTitle";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Lightbulb,
  Rocket,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and interactive interfaces with modern frontend technologies.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Development",
    description:
      "Creating complete web applications with frontend and backend functionality.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "Turning ideas into clean, useful, and thoughtful digital experiences.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description:
      "Exploring new technologies and improving my development skills every day.",
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#1A1A1A]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10">
        <div className="mb-16">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#737373]">
            Get to know me
          </p>

          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.1] tracking-tight sm:text-7xl">
            A little about
            <span className="text-[#88847D]"> who I am.</span>
          </h1>
        </div>

        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-sm border border-[#D6D3CD]" />

            <div className="relative aspect-[4/5] overflow-hidden bg-[#EBE6DE]">
              <Image
                src="/hasan.png"
                alt="Hasan Sheikh"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 450px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 bg-[#1A1A1A] px-6 py-4 text-[#F5F2EB] sm:-right-6">
              <p className="font-display text-xl font-semibold">HS.</p>
              <p className="mt-1 text-xs text-white/60">
                Web Developer
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#737373]">
              Hello, Im Hasan
            </p>

            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              I enjoy building digital experiences that are simple, useful,
              and meaningful.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-[#737373]">
              <p>
                Im a web developer interested in creating modern websites
                and web applications. I enjoy combining clean design with
                functional development to create experiences that people
                love to use.
              </p>

              <p>
                My journey is driven by curiosity, creativity, and a desire
                to keep learning. I enjoy solving problems, exploring new
                technologies, and turning ideas into real projects.
              </p>

              <p>
                From designing interfaces to developing backend
                functionality, I m continuously working to improve my skills
                and build better digital products.
              </p>
            </div>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#1A1A1A] pb-2 text-sm font-medium"
            >
              Lets work together
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D6D3CD] bg-[#EBE6DE] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionTitle k="What I do" t="My approach" />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="reveal border border-[#D6D3CD] bg-[#F5F2EB] p-7 transition-all duration-300 hover:-translate-y-2"
                >
                  <span className="text-sm text-[#737373]">
                    0{index + 1}
                  </span>

                  <div className="my-8">
                    <Icon size={30} strokeWidth={1.4} />
                  </div>

                  <h3 className="font-display text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#737373]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <SectionTitle k="My toolbox" t="Technologies I work with" />

        <p className="mt-5 max-w-xl leading-7 text-[#737373]">
          These are some of the technologies I use and continue to explore
          while building web applications.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="border border-[#D6D3CD] bg-[#FAF9F6] px-5 py-3 text-sm transition-colors duration-300 hover:bg-[#1A1A1A] hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-6 py-24 text-[#F5F2EB]">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Have a project in mind?
          </p>

          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Lets create something meaningful together.
            </h2>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 self-start border-b border-white/50 pb-3 text-sm transition-colors hover:border-white md:self-auto"
            >
              Get in touch
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

export default AboutPage;
