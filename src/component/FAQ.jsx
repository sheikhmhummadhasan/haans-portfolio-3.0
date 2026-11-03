"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";

const faqs = [
  {
    _id: "faq-1",
    question: "What services do you offer?",
    answer:
      "I offer web design, frontend development, responsive website development, and full-stack web application development.",
    isActive: true,
  },
  {
    _id: "faq-2",
    question: "How long does a project take?",
    answer:
      "Project timelines depend on the requirements and complexity. A typical website may take around 1–3 weeks.",
    isActive: true,
  },
  {
    _id: "faq-3",
    question: "Do you work with existing websites?",
    answer:
      "Yes. I can improve existing websites, fix bugs, redesign interfaces, and add new features.",
    isActive: true,
  },
  {
    _id: "faq-4",
    question: "Do you provide support after delivery?",
    answer:
      "Yes. I provide post-delivery support depending on the project agreement.",
    isActive: true,
  },
  {
    _id: "faq-5",
    question: "How can I start a project with you?",
    answer:
      "You can contact me through the contact form. Share your project details and requirements, and we can discuss the next steps.",
    isActive: true,
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const activeFaqs = faqs.filter((faq) => faq.isActive);

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-32">
      <div className="mb-12">
        <SectionTitle k="Questions" t="FAQ" />
      </div>

      {activeFaqs.map((faq, index) => (
        <div
          key={faq._id}
          className="reveal border-t border-border last:border-b"
        >
          <button
            type="button"
            onClick={() => setOpen(open === index ? null : index)}
            aria-expanded={open === index}
            className="flex w-full items-center justify-between gap-4 py-6 text-left text-xl font-medium"
          >
            {faq.question}

            <span
              className={`shrink-0 text-3xl transition-transform duration-300 ${
                open === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          <div
            className={`grid transition-all duration-500 ${
              open === index
                ? "grid-rows-[1fr] pb-6"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-muted-foreground leading-7">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;