"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

const FEATURED_PROJECTS = [
  {
    title:
      "GreenWin Motorcycle Taxi Booking Mobile Application in Thammasat University",
    description:
      "A highly scalable microservices architecture designed to handle large-volume data processing with near-zero...",
    tags: ["REACT NATIVE", "SPRING BOOT", "MYSQL", "CLOUDINARY"],
    href: "/project",
    imageSrc: "/project-placeholder.jpg",
  },
];

export default function Home() {
  const scrollToContent = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-[calc(100dvh-65px)] flex flex-col items-center justify-center px-6 py-24 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-lg  tracking-tight text-accent sm:text-4xl">
            HELLO, I&apos;M
          </h1>
          <p className="mt-4 text-[32px] font-bold leading-tight text-muted wrap-break-words sm:text-[56px] lg:text-[80px]">
            KITTAPAS CHOCTANATORN
          </p>
          <p className="font-jetbrains mt-4 text-lg text-muted sm:text-xl">
            SOFTWARE ENGINEER
          </p>
        </motion.div>

        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 flex flex-col items-center gap-1 text-accent/60 transition-colors hover:text-accent"
          aria-label="Scroll to more content"
        >
          <span className="font-jetbrains text-xs font-medium tracking-[0.25em]">
            MORE
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={20} />
          </motion.span>
        </motion.button>
      </section>

      <section id="content" className="px-6 py-24 sm:py-32 ">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-muted sm:text-4xl">
              Who I Am
            </h2>
            <span className="mt-4 block h-px w-10 bg-accent" />
            <p className="mt-6 leading-relaxed text-accent">
              I am a software engineer dedicated to building clean, scalable,
              and highly performant applications. My approach blends
              architectural rigor with an eye for modern, minimalist design,
              ensuring that robust backend systems are paired with elegant user
              interfaces.
            </p>
            <a
              href="/about"
              className="mt-8 inline-block border border-accent/40 px-6 py-3 font-jetbrains text-xs font-medium tracking-[0.25em] text-accent transition-colors hover:border-accent hover:bg-accent/10"
            >
              ABOUT ME
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <img
              src="me.jpg"
              alt="profile"
              loading="lazy"
              className="aspect-square w-full rounded-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Project */}
      <section className="px-6 py-18 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-muted sm:text-4xl">Project</h2>
          <span className="mx-auto mt-4 block h-px w-10 bg-accent" />
        </motion.div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-10">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            href="/project"
            className="inline-block border border-accent/40 px-8 py-3 font-jetbrains text-xs font-medium tracking-[0.25em] text-accent transition-colors hover:border-accent hover:bg-accent/10"
          >
            VIEW ALL PROJECTS
          </Link>
        </motion.div>
      </section>

      {/* Why I Became a Software Engineer */}
      <section className="px-6 py-24 sm:py-32 border-b border-surface">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-muted sm:text-4xl">
              Why I Became a Software Engineer
            </h2>
            <span className="mx-auto mt-6 block h-px w-12 bg-accent" />
            <p className="mt-8 leading-relaxed text-accent">
              The intersection of logic and creativity drew me to code.
              Engineering is not just about writing syntax; it&apos;s about
              architecting solutions to complex problems and building systems
              that endure. I value the quiet precision required to craft elegant
              software—stripping away the unnecessary to reveal clear,
              functional, and performant structures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Talk With Me */}
      <section className="px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-extrabold text-muted sm:text-5xl lg:text-6xl">
            TALK WITH ME!!
          </h2>
          <p className="mt-6 font-jetbrains text-sm tracking-[0.2em] text-accent sm:text-base">
            LET&apos;S BUILD SOMETHING EXTRAORDINARY TOGETHER.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block border border-accent/40 px-8 py-3 font-jetbrains text-xs font-medium tracking-[0.25em] text-accent transition-colors hover:border-accent hover:bg-accent/10"
          >
            CONTACT ME
          </Link>
        </motion.div>
      </section>
    </>
  );
}
