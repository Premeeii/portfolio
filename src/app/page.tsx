"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import AsciiImage from "@/components/AsciiImage";
import ScrollPushBack from "@/components/ScrollPushBack";

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
      {/* ─── Hero Section ─── */}
      <ScrollPushBack scrollHeight={1.4}>
        <section className="relative min-h-[calc(100dvh-65px)] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg tracking-tight text-accent sm:text-4xl"
            >
              HELLO, I&apos;M
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mt-4 text-[32px] font-bold leading-tight text-muted wrap-break-words sm:text-[56px] lg:text-[80px]"
            >
              KITTAPAS CHOCTANATORN
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="font-jetbrains mt-4 text-lg text-muted sm:text-xl"
            >
              {"//SOFTWARE ENGINEER"}
            </motion.p>
          </div>

          <motion.button
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
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
      </ScrollPushBack>

      {/* ─── Who I Am Section ─── */}
      <ScrollPushBack scrollHeight={2}>
        <section id="content" className="flex min-h-[calc(100dvh-65px)] items-center px-6 py-10 sm:py-32">
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-16 ">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 text-center lg:order-1 lg:text-left"
            >
              <h2 className="text-3xl font-bold text-muted sm:text-4xl">
                Who I Am
              </h2>
              <span className="mx-auto mt-2 block h-px w-33 bg-accent sm:w-40 lg:mx-0" />
              <p className="mt-4 text-sm leading-relaxed text-accent sm:mt-6 sm:text-base">
                &ldquo;I am a recent Computer Science graduate from Thammasat
                University. My journey began with a desire to build a web
                application that could solve my own problems. This drove me to
                dive deep into programming and pursue a formal education in
                Computer Science. Throughout my time at university, I
                consistently pushed myself to grow across all areas of software
                development. One of my achievements was developing a motorcycle
                taxi booking mobile application in Thammasat University. These
                hands-on experiences have provided me with invaluable, practical
                knowledge in software engineering and problem-solving.&rdquo;
              </p>
              <a
                href="/about"
                className="mt-6 inline-block border border-accent/40 px-6 py-3 font-jetbrains text-xs font-medium tracking-[0.25em] text-accent transition-colors hover:border-accent hover:bg-accent/10 sm:mt-8"
              >
                ABOUT ME
              </a>
            </motion.div>

            <AsciiImage
              src="me.jpg"
              alt="profile"
              className="order-1 mx-auto aspect-square w-full max-w-56 sm:max-w-72 lg:order-2 lg:max-w-none"
              cols={60}
              revealDuration={2500}
            />
          </div>
        </section>
      </ScrollPushBack>

      {/* ─── Project Section ─── */}
      <ScrollPushBack scrollHeight={1.5}>
        <section className="px-6 py-18 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-muted sm:text-4xl">
              Project
            </h2>
            <span className="mx-auto mt-2 block h-px w-25 bg-accent sm:w-30" />
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
      </ScrollPushBack>

      {/* ─── Talk With Me Section ─── */}
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
