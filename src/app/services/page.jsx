
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  MonitorSmartphone,
  Database,
  Palette,
  Search,
  Wrench,
  Check,
  Sparkles,
} from "lucide-react";

const services = [
  {
    _id: "service-1",
    number: "01",
    name: "Web Development",
    subtitle: "Modern websites built for performance.",
    description:
      "I build modern, responsive, and high-performance websites that help businesses establish a strong online presence.",
    icon: Code2,
    features: [
      "Custom website development",
      "Responsive design",
      "Modern frontend technologies",
      "Performance optimization",
      "SEO-friendly structure",
    ],
    price: "Let's discuss",
    popular: true,
  },
  {
    _id: "service-2",
    number: "02",
    name: "Frontend Development",
    subtitle: "Beautiful interfaces, smooth experiences.",
    description:
      "I transform design concepts into interactive interfaces with attention to detail, usability, and responsive layouts.",
    icon: MonitorSmartphone,
    features: [
      "React.js development",
      "Next.js applications",
      "Pixel-focused UI implementation",
      "Responsive layouts",
      "Interactive components",
    ],
    price: "Let's discuss",
    popular: false,
  },
  {
    _id: "service-3",
    number: "03",
    name: "Full-Stack Development",
    subtitle: "Complete applications from front to back.",
    description:
      "I develop complete web applications with frontend interfaces, backend APIs, database integration, and authentication.",
    icon: Database,
    features: [
      "Frontend and backend development",
      "REST API development",
      "MongoDB integration",
      "Authentication systems",
      "Database management",
    ],
    price: "Let's discuss",
    popular: false,
  },
  {
    _id: "service-4",
    number: "04",
    name: "Website Redesign",
    subtitle: "Give your existing website a fresh look.",
    description:
      "I improve existing websites with cleaner layouts, better usability, responsive interfaces, and modern visual design.",
    icon: Palette,
    features: [
      "UI redesign",
      "Mobile responsiveness",
      "Layout improvements",
      "Visual consistency",
      "User experience improvements",
    ],
    price: "Let's discuss",
    popular: false,
  },
  {
    _id: "service-5",
    number: "05",
    name: "Website Optimization",
    subtitle: "Make your website work better.",
    description:
      "I help improve website performance, usability, and technical quality by identifying and fixing common issues.",
    icon: Search,
    features: [
      "Performance improvements",
      "Bug fixing",
      "Code optimization",
      "Responsive issue fixing",
      "Basic SEO improvements",
    ],
    price: "Let's discuss",
    popular: false,
  },
  {
    _id: "service-6",
    number: "06",
    name: "Website Maintenance",
    subtitle: "Keep your website updated and reliable.",
    description:
      "I provide ongoing website improvements, technical updates, and maintenance based on your project requirements.",
    icon: Wrench,
    features: [
      "Bug fixes",
      "Content updates",
      "Feature improvements",
      "Technical support",
      "Regular maintenance",
    ],
    price: "Let's discuss",
    popular: false,
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding your goals, ideas, audience, and project requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Defining the structure, features, technologies, and project timeline.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building your project with attention to design, quality, and performance.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Testing, final improvements, and delivering the completed project.",
  },
];

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#1A1A1A]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#737373]">
            What I can do for you
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[1.1] tracking-tight sm:text-7xl">
            Services &
            <span className="text-[#88847D]"> solutions.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#737373]">
            From creating modern websites to developing complete web
            applications, I help turn your ideas into useful digital
            experiences.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#1A1A1A] px-7 py-4 text-sm font-medium text-white transition-all hover:bg-[#333]"
          >
            Discuss your project
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service._id}
                className="reveal group relative flex flex-col border border-[#D6D3CD] bg-[#FAF9F6] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
              >
                {service.popular && (
                  <span className="absolute right-6 top-6 bg-[#1A1A1A] px-3 py-2 text-[10px] uppercase tracking-widest text-white">
                    Popular
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.25em] text-[#737373]">
                    {service.number} / SERVICE
                  </span>

                  <Icon size={27} strokeWidth={1.4} />
                </div>

                <div className="mt-12">
                  <h2 className="font-display text-2xl font-semibold">
                    {service.name}
                  </h2>

                  <p className="mt-2 text-sm text-[#737373]">
                    {service.subtitle}
                  </p>

                  <p className="mt-6 text-sm leading-7 text-[#737373]">
                    {service.description}
                  </p>
                </div>

                <div className="my-8 h-px bg-[#D6D3CD]" />

                <ul className="flex-1 space-y-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#555]"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0"
                        strokeWidth={1.7}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex items-center justify-between border-t border-[#D6D3CD] pt-6">
                  <div>
                    <p className="text-xs text-[#737373]">Pricing</p>
                    <p className="mt-1 font-display text-lg font-semibold">
                      {service.price}
                    </p>
                  </div>

                  <Link
                    href={`/contact?service=${service._id}`}
                    aria-label={`Discuss ${service.name}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D6D3CD] transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white"
                  >
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#D6D3CD] bg-[#EBE6DE] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#737373]">
              How I work
            </p>

            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              A simple process. Better results.
            </h2>

            <p className="mt-5 leading-7 text-[#737373]">
              Every project follows a clear process to keep things organized
              and make sure were moving in the right direction.
            </p>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.number} className="reveal border-t border-[#BDB8AE] pt-6">
                <span className="text-sm tracking-widest text-[#737373]">
                  {item.number}
                </span>

                <h3 className="mt-8 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#737373]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-6 py-24 text-[#F5F2EB] md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 text-white/50">
            <Sparkles size={19} />
            <p className="text-sm uppercase tracking-[0.3em]">
              Have an idea?
            </p>
          </div>

          <div className="mt-7 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Lets build something meaningful together.
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

export default ServicesPage;
