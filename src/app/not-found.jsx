"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F5F2EB] px-6 py-20 text-[#1A1A1A]">
      <div className="absolute inset-0 bg-[radial-gradient(#c9c6bf_0.8px,transparent_0.8px)] bg-[size:22px_22px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-[#737373]">
          Page not found
        </p>

        <h1 className="font-display text-[clamp(120px,25vw,260px)] font-bold leading-[0.8] tracking-tighter">
          404
        </h1>

        <div className="mx-auto mt-10 max-w-md">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Lost in the wrong direction?
          </h2>

          <p className="mt-4 text-base leading-7 text-[#737373]">
            The page your looking for doesnt exist or may have been moved.
            Lets get you back on track.
          </p>

          <Link
            href="/"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#1A1A1A] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#333] hover:shadow-xl"
          >
            <ArrowLeft size={17} />
            Back to Homepage
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <p className="mt-20 text-xs tracking-widest text-[#737373]">
          HASAN SHEIKH — DESIGNER & DEVELOPER
        </p>
      </div>
    </main>
  );
};

export default NotFound;