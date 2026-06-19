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
        <section id="about-content" className="px-2 py-16 sm:px-4 sm:py-10">
          <div className="mx-auto max-w-8xl">
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
                  Hello, I'm Kittapas Chocktanatorn. I'm graduate from Thammasat
                  University, Rangsit Center, majoring in Computer Science with
                  a minor in Software Engineering. My mindset regarding system
                  development is to create solutions that can help solve
                  problems or improve things to a better state. The starting
                  point came from wanting to have a website that met my own
                  needs. With this passion, it made me want to learn more about
                  software development.
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
                  "During my studies, I had many experiences both in the
                  classroom and through participating in outside activities.
                  This helped me develop various mindsets for self-improvement
                  and working with others. I also had the opportunity to learn
                  different concepts by participating in events, such as
                  activities where various companies came to educate students to
                  prepare them for the real working world, which showed me
                  different mindsets and paths for self-development. The most
                  inspiring activity for me was being a staff member for the
                  Thailand Children's University project, teaching children to
                  learn about the logical sequence of algorithms. Doing this
                  helped give me a much stronger mindset for working, as it felt
                  really good to be able to turn a difficult subject into
                  something easy to understand."
                </p>
              </motion.div>

              <motion.div
                custom={3}
                variants={cellVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
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

      {/* ─── Row 3: Text (own ScrollPushBack) ─── */}
      <ScrollPushBack scrollHeight={1.4}>
        <section className="px-2 py-16 sm:px-4 sm:py-10">
          <div className="mx-auto max-w-8xl">
            <div className="grid grid-cols-1">
              <motion.div
                custom={4}
                variants={cellVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex items-center bg-background p-8 sm:p-12"
              >
                <p className="leading-relaxed text-accent text-sm sm:text-base">
                  &quot;The project I am most proud of is the motorcycle taxi
                  hailing application within Thammasat University. This is
                  because it is a project where I started from thinking of the
                  idea right through to the implementation stage for both the
                  backend and frontend. I experienced a lot of trial and error,
                  including collecting data, finding the pros and cons of each
                  tech stack, and learning the coding process using frameworks I
                  had never used before. It can be said that it is a project I
                  started from zero until I was able to develop it into a
                  tangible form.&quot;
                </p>
              </motion.div>
              <motion.div
                custom={5}
                variants={cellVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex items-center bg-background p-8 sm:p-12"
              >
                <p className="leading-relaxed text-accent text-sm sm:text-base">
                  "My working style is brainstorming and discussing together
                  within the team. I have had the opportunity to be the one
                  assigning work, so I have experience in dividing the duties of
                  each team member so that everyone receives tasks that are
                  suitable for them. Finally, regarding my working mindset:
                  teamwork, responsibility, and communication. I consider these
                  to be important matters for working together in a team and an
                  organization."
                </p>
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
