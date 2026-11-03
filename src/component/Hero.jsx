
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - (rect.left + rect.width / 2)) / 25;
    const y = (e.clientY - (rect.top + rect.height / 2)) / 25;

    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <>
      <section className="grain relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 pb-24 pt-32 md:px-12 lg:px-16">

        <div className="grid w-full items-center gap-20 lg:grid-cols-[1.4fr_1fr]">

          <div className="hero-content order-2 lg:order-1">

            <p className="mb-7 overflow-hidden text-center text-xs uppercase tracking-[0.3em] text-neutral-500 lg:text-left">
              <span className="rise-line">
                Designer & Developer — Dhaka
              </span>
            </p>

            <h1 className="font-display text-center text-7xl font-bold leading-[0.9] tracking-[-0.07em] text-neutral-950 sm:text-8xl md:text-9xl lg:text-left lg:text-[130px] xl:text-[150px]">

              {["Hasan", "Sheikh."].map((word, index) => (
                <span key={word} className="block overflow-hidden pb-2">
                  <span
                    className="rise-line"
                    style={{ animationDelay: `${0.15 + index * 0.15}s` }}
                  >
                    {word}
                  </span>
                </span>
              ))}

            </h1>

            <p className="reveal mx-auto mt-8 max-w-md text-center text-base leading-8 text-neutral-600 lg:mx-0 lg:text-left lg:text-lg">
              I craft clean, bold digital experiences where design meets motion.
              Turning ideas into meaningful digital experiences.
            </p>

            <div className="reveal mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800"
              >
                Order a project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-full border border-neutral-300 px-7 py-4 text-sm font-medium text-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-950 hover:text-white"
              >
                See my work
              </Link>

            </div>

            <div className="reveal mt-14 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Available for new projects
              </p>
            </div>

          </div>

          <div
            className="hero-portrait order-1 mx-auto w-full max-w-[340px] lg:order-2 lg:max-w-[430px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            <div
              className="portrait-wrapper"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
              }}
            >

              <div className="portrait-ring"></div>
              <div className="portrait-ring-inner"></div>

              <div className="portrait-image">
                <Image
                  src="/hasan.png"
                  alt="Hasan Sheikh"
                  fill
                  priority
                  sizes="(max-width: 768px) 85vw, 430px"
                  className="portrait-photo"
                />
              </div>

              <div className="portrait-badge">
                <span className="badge-dot"></span>
                Available for work
              </div>

              <div className="portrait-number">
                <span>01</span>
                <span className="portrait-line"></span>
                <span>HASAN SHEIKH</span>
              </div>

            </div>

          </div>

        </div>

        <div className="hero-scroll hidden lg:flex">
          SCROLL TO EXPLORE <span>↓</span>
        </div>

      </section>

      <div className="marquee-section overflow-hidden border-y border-neutral-300 bg-neutral-950 py-5 text-white">
        <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap font-display text-3xl font-medium md:text-4xl">
          {Array.from({ length: 4 }).flatMap((_, index) =>
            ["UI Design", "✦", "Branding", "✦", "Motion", "✦", "Web Development", "✦"].map((item, i) => (
              <span key={`${index}-${i}`}>{item}</span>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
