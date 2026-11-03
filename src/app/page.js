import About from "@/component/About";
import Contact from "@/component/Contact";
import FAQ from "@/component/FAQ";
import Hero from "@/component/Hero";
import Process from "@/component/Process";
import Projects from "@/component/Projects";
import Reviews from "@/component/Reviews";
import Services from "@/component/Services";
import Skills from "@/component/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Process />
    <Services />
    <Reviews />
    <FAQ />
    <Contact />
    </>
  );
}
