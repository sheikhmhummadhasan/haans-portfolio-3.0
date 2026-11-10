"use client";

import { Check, ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const services = [
  {
    _id: "basic",
    name: "Basic",
    description: "Perfect for personal portfolios and simple websites.",
    price: 99,
    currency: "USD",
    features: [
      "Single Page Website",
      "Responsive Design",
      "Modern UI Design",
      "Basic Animations",
      "Basic SEO Setup",
    ],
    popular: false,
  },
  {
    _id: "standard",
    name: "Standard",
    description: "Ideal for businesses looking for a professional website.",
    price: 199,
    currency: "USD",
    features: [
      "Up to 5 Pages",
      "Custom UI Design",
      "Fully Responsive",
      "Smooth Animations",
      "SEO Optimization",
      "Contact Form Integration",
    ],
    popular: true,
  },
  {
    _id: "premium",
    name: "Premium",
    description: "Complete solution for advanced web experiences.",
    price: 399,
    currency: "USD",
    features: [
      "Up to 10 Pages",
      "Advanced UI/UX Design",
      "Full Stack Development",
      "Database Integration",
      "Admin Dashboard",
      "Advanced Animations",
    ],
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full px-6 py-32 md:px-12 lg:px-16">
      <div className="mb-16">
        <SectionTitle k="Order a project" t="Services & pricing" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service._id}
            className={`reveal flex flex-col border p-8 transition duration-500 hover:-translate-y-2 ${
              service.popular
                ? "border-neutral-950 bg-neutral-950 text-white"
                : "border-neutral-300 bg-[#faf9f6] text-neutral-950"
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {service.popular && (
              <span className="mb-4 self-start rounded-full border border-white/40 px-3 py-1 text-xs uppercase tracking-widest">
                Most popular
              </span>
            )}

            <h3 className="text-2xl font-bold">{service.name}</h3>

            <p className="mt-2 text-sm opacity-70">{service.description}</p>

            <div className="my-8 font-display text-5xl font-bold">
              ${service.price}
            </div>

            <ul className="mb-10 flex-1 space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <form
              action="/api/checkout_sessions"
              method="POST"
              className="w-full"
            >
              <input type="hidden" name="plan_id" value={service._id} />

              <button
                type="submit"
                className={`group flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-medium transition hover:scale-[1.03] ${
                  service.popular
                    ? "bg-white text-neutral-950"
                    : "bg-neutral-950 text-white"
                }`}
              >
                Choose {service.name}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </form>
            {/* <a
              href={`/contact?plan=${service._id}`}
              className={`group flex items-center justify-center gap-2 rounded-full py-4 text-sm font-medium transition hover:scale-[1.03] ${
                service.popular
                  ? "bg-white text-neutral-950"
                  : "bg-neutral-950 text-white"
              }`}
            >
              Choose {service.name}
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;


