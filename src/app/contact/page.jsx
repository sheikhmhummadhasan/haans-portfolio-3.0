"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
} from "lucide-react";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";

const whatsappNumber = "8801612898695";
const emailAddress = "hasanoffichal007@gmail.com";

const services = [
  "Web Development",
  "Frontend Development",
  "Full-Stack Development",
  "Website Redesign",
  "Website Optimization",
  "Website Maintenance",
  "Other",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const prom = await fetch(`http://localhost:5000/visitor`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await prom.json();
    if(res){
      toast.success(`Your Message sent is Successfully!`)
    }else{
      toast.error('sorry surver is error!')
    }
    console.log(data, res);
  };

  const inputClass =
    "w-full border-b border-[#D6D3CD] bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-[#A19C94] focus:border-[#1A1A1A]";

  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#1A1A1A]">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-10">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#737373]">
            Get in touch
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[1.1] tracking-tight sm:text-7xl">
            Lets start a<span className="text-[#88847D]"> conversation.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#737373]">
            Have an idea, a project, or just want to say hello? I do love to
            hear from you. Lets discuss how we can create something meaningful
            together.
          </p>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <aside>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600" />
              </span>

              <p className="text-sm text-[#737373]">
                Available for new projects
              </p>
            </div>

            <h2 className="mt-10 max-w-sm font-display text-3xl font-semibold leading-tight">
              Lets turn your ideas into reality.
            </h2>

            <div className="mt-12 space-y-8">
              <a
                href={`mailto:${emailAddress}`}
                className="group flex items-center gap-5"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-[#D6D3CD] transition-colors group-hover:bg-[#1A1A1A] group-hover:text-white">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#737373]">
                    Email me
                  </p>
                  <p className="mt-1 text-sm font-medium">{emailAddress}</p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="ml-auto transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-[#D6D3CD] transition-colors group-hover:bg-[#1A1A1A] group-hover:text-white">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#737373]">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-sm font-medium">+880 1612-898695</p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="ml-auto transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center border border-[#D6D3CD]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#737373]">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-medium">Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-[#D6D3CD] pt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#737373]">
                Find me on
              </p>

              <div className="mt-5 flex gap-3">
                <Link
                  href="https://github.com/sheikhmhummadhasanhttps://github.com/sheikhmhummadhasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center border border-[#D6D3CD] transition-colors hover:bg-[#1A1A1A] hover:text-white"
                >
                  <FaGithub size={19} />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/hasan-sheikh-7604542b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center border border-[#D6D3CD] transition-colors hover:bg-[#1A1A1A] hover:text-white"
                >
                  <FaLinkedin size={19} />
                </Link>

                <Link
                  href="https://www.facebook.com/sheikhmhummad.hasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center border border-[#D6D3CD] transition-colors hover:bg-[#1A1A1A] hover:text-white"
                >
                  <FaFacebook size={19} />
                </Link>
              </div>
            </div>
          </aside>

          <div className="border border-[#D6D3CD] bg-[#FAF9F6] p-7 sm:p-10">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[#737373]">
                Send a message
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold">
                Tell me about your project.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-widest text-[#737373]"
                  >
                    Your name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest text-[#737373]"
                  >
                    YOUR PHONE NUMBER *
                  </label>

                  <input
                    id="email"
                    name="number"
                    type="number"
                    required
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="+XXXXXXXXXXXX"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest text-[#737373]"
                  >
                    Email address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="service"
                    className="text-xs uppercase tracking-widest text-[#737373]"
                  >
                    Service interested in *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClass} text-[#737373]`}
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="text-xs uppercase tracking-widest text-[#737373]"
                  >
                    Estimated budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClass} text-[#737373]`}
                  >
                    <option value="">Select your budget</option>
                    <option value="Under $100">Under $100</option>
                    <option value="$100 - $300">$100 - $300</option>
                    <option value="$300 - $500">$300 - $500</option>
                    <option value="$500 - $1000">$500 - $1000</option>
                    <option value="$1000+">$1000+</option>
                    <option value="Not decided">Not decided</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-widest text-[#737373]"
                >
                  Project details *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#1A1A1A] px-7 py-5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#333]"
              >
                Send Message
                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              {submitted && (
                <p className="flex items-center gap-2 text-sm text-green-700">
                  <CheckCircle2 size={17} />
                  Your email application is opening.
                </p>
              )}

              <p className="text-center text-xs leading-6 text-[#737373]">
                This form opens your default email application. It does not
                directly submit data to a server.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-6 py-24 text-[#F5F2EB]">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            One message can start something great
          </p>

          <div className="mt-7 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Have something in mind? Lets talk.
            </h2>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello Hasan, I would like to discuss a project with you.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 self-start border-b border-white/50 pb-3 text-sm hover:border-white md:self-auto"
            >
              Chat on WhatsApp
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
