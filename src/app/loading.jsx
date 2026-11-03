"use client";

import { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#F5F2EB] px-6">
      <div className="absolute inset-0 bg-[radial-gradient(#c9c6bf_0.8px,transparent_0.8px)] bg-[size:22px_22px] opacity-40" />

      <div className="relative flex w-full max-w-xs flex-col items-center">
        <div className="relative mb-10 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border border-[#D6D3CD] border-t-[#1A1A1A]" />

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1A1A1A] text-xl font-bold tracking-tight text-[#F5F2EB]">
            HS.
          </div>
        </div>

        <h1 className="font-display text-2xl font-semibold tracking-tight text-[#1A1A1A]">
          Hasan Sheikh
        </h1>

        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#737373]">
          Designer & Developer
        </p>

        <div className="mt-12 w-full">
          <div className="mb-3 flex items-center justify-between text-xs">
            <span className="uppercase tracking-widest text-[#737373]">
              Loading
            </span>
            <span className="font-medium tabular-nums text-[#1A1A1A]">
              {progress}%
            </span>
          </div>

          <div className="h-[2px] w-full overflow-hidden bg-[#D6D3CD]">
            <div
              className="h-full bg-[#1A1A1A] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="mt-8 animate-pulse text-xs text-[#737373]">
          Crafting something meaningful...
        </p>
      </div>
    </main>
  );
};

export default Loading;