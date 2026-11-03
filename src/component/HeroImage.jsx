"use client";

import { useState } from "react";
import Image from "next/image";

const HeroImage = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPos({
      x: (e.clientX / window.innerWidth - 0.5) * 24,
      y: (e.clientY / window.innerHeight - 0.5) * 24,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="relative mx-auto aspect-[4/5] w-full max-w-sm transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      <div className="absolute -inset-6 animate-spin-slow rounded-full border border-dashed border-foreground/30" />

      <div className="relative h-full w-full animate-float overflow-hidden rounded-sm shadow-2xl">
        <Image
          src="/hasan.png"
          alt="Hasan Sheikh portrait"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div
        className="absolute -bottom-5 -left-6 animate-float rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground"
        style={{ animationDelay: "1.5s" }}
      >
        ● Available for work
      </div>
    </div>
  );
};

export default HeroImage;