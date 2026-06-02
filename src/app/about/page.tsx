"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechStackSlider from "@/components/TechStackSlider";
import ScrollPushBack from "@/components/ScrollPushBack";

const cellVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: i * 0.12,
    },
  }),
};

export default function About() {
  const scrollToContent = () => {
    document
      .getElementById("about-content")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ─── Hero Section ─── */}
      <ScrollPushBack scrollHeight={1.4}>
        <section className="relative min-h-[calc(100dvh-65px)] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xl font-bold italic leading-snug text-muted sm:text-2xl lg:text-3xl"
            >
              {
                "\u201CIF YOU\u2019RE HERE, IT MIGHT MEAN YOU WANT TO GET TO KNOW ME BETTER\u201D"
              }
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="mt-6 font-jetbrains text-sm font-bold tracking-[0.25em] text-accent/70 sm:text-base"
            >
              KITTAPAS CHOCKTANATORN
            </motion.p>
          </div>

          <motion.button
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-8 flex flex-col items-center gap-1 text-accent/60 transition-colors hover:text-accent"
            aria-label="Scroll to about content"
          >
            <span className="font-jetbrains text-xs font-medium tracking-[0.25em]">
              {"LET\u2019S GO"}
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

      {/* ─── Bento Grid Section ─── */}
      <ScrollPushBack scrollHeight={1.5}>
        <section id="about-content" className="px-4 py-16 sm:px-6 sm:py-10">
          <div className="mx-auto max-w-5xl">
            {/* ── Row 1: Image | Text ── */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <motion.div
                custom={0}
                variants={cellVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="relative md:col-span-1 overflow-hidden"
              >
                <Image
                  src="/me.jpg"
                  alt="About photo 1"
                  width={600}
                  height={750}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                custom={1}
                variants={cellVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex items-center bg-background p-8 sm:p-12 md:col-span-2"
              >
                <p className="leading-relaxed text-accent text-sm sm:text-base">
                  I am a software engineer dedicated to building clean, scalable,
                  and highly performant applications. My approach blends
                  architectural rigor with an eye for modern, minimalist design,
                  ensuring that robust backend systems are paired with elegant
                  user interfaces.
                </p>
              </motion.div>
            </div>

            {/* ── Row 2: Text | Image (2 cols) ── */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <motion.div
                custom={2}
                variants={cellVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex items-center bg-background p-8 sm:p-12 md:col-span-1"
              >
                <p className="leading-relaxed text-accent text-sm sm:text-base">
                  I am a software engineer dedicated to building clean, scalable,
                  and highly performant applications. My approach blends
                  architectural rigor with an eye for modern, minimalist design,
                  ensuring that robust backend systems are paired with elegant
                  user interfaces.
                </p>
              </motion.div>

              <motion.div
                custom={3}
                variants={cellVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="relative md:col-span-2 overflow-hidden"
              >
                <Image
                  src="/activity.jpg"
                  alt="About photo 2"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollPushBack>

      {/* ─── Tech Stack Slider ─── */}
      <TechStackSlider />

      {/* ─── Talk With Me ─── */}
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
