"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";

const EMAIL = "your-email@example.com";

const services = [
  { _id: "basic", name: "Basic" },
  { _id: "standard", name: "Standard" },
  { _id: "premium", name: "Premium" },
];

const Contact = () => {
  const [plan, setPlan] = useState("Basic");

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const budget = formData.get("budget");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Project inquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${plan}\nBudget: ${budget}\n\nProject Details:\n${message}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section
        id="contact"
        className="grid w-full gap-16 bg-primary px-6 py-32 text-primary-foreground md:grid-cols-2 md:px-12 lg:px-16"
      >
        <div className="reveal">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-60">
            Contact with me
          </p>

          <h2 className="font-display text-6xl font-bold leading-none md:text-8xl">
            Lets work together.
          </h2>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-10 inline-flex items-center gap-3 text-xl underline underline-offset-8"
          >
            <Mail className="h-5 w-5" />
            {EMAIL}
          </a>

          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-primary-foreground/40 p-3 transition hover:rotate-12 hover:bg-primary-foreground hover:text-primary"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-primary-foreground/40 p-3 transition hover:rotate-12 hover:bg-primary-foreground hover:text-primary"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-primary-foreground/40 p-3 transition hover:rotate-12 hover:bg-primary-foreground hover:text-primary"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="reveal space-y-5">
          <input
            required
            name="name"
            placeholder="Your name"
            className="w-full border-b border-primary-foreground/30 bg-transparent py-4 outline-none transition focus:border-primary-foreground placeholder:text-primary-foreground/50"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full border-b border-primary-foreground/30 bg-transparent py-4 outline-none transition focus:border-primary-foreground placeholder:text-primary-foreground/50"
          />

          <div className="grid grid-cols-2 gap-5">
            <select
              name="plan"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="min-w-0 border-b border-primary-foreground/30 bg-primary py-4 outline-none"
            >
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>

            <input
              name="budget"
              placeholder="Budget"
              className="min-w-0 border-b border-primary-foreground/30 bg-transparent py-4 outline-none placeholder:text-primary-foreground/50"
            />
          </div>

          <textarea
            required
            name="message"
            rows={4}
            placeholder="Tell me about your project"
            className="w-full border-b border-primary-foreground/30 bg-transparent py-4 outline-none transition focus:border-primary-foreground placeholder:text-primary-foreground/50"
          />

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 font-medium text-primary transition hover:gap-4"
          >
            Send order
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      </section>

      <footer className="flex justify-between border-t border-primary-foreground/20 bg-primary px-6 py-8 text-sm text-primary-foreground/60 md:px-12">
        <span>© 2026 Hasan Sheikh</span>

        <a href="#" className="transition hover:text-primary-foreground">
          Back to top ↑
        </a>
      </footer>
    </>
  );
};

export default Contact;