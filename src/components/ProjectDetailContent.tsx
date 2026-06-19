"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { ProjectDetail } from "@/lib/projects";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

interface ProjectDetailContentProps {
  project: ProjectDetail;
}

export default function ProjectDetailContent({
  project,
}: ProjectDetailContentProps) {
  return (
    <section className="px-6 py-12 sm:py-20">
      <motion.div
        className="mx-auto max-w-5xl"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        {/* ── Back Button ── */}
        <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
          <Link
            href="/project"
            className="group mb-10 inline-flex items-center gap-2 font-jetbrains text-xs tracking-[0.2em] text-muted transition-colors duration-300 hover:text-accent sm:mb-14"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            BACK TO PROJECTS
          </Link>
        </motion.div>

        {/* ── Header ── */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <span className="mb-3 block font-jetbrains text-xs tracking-widest text-muted">
            {project.category}
          </span>
          <h1 className="text-4xl font-bold leading-tight text-accent sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-muted sm:text-xl">
            {project.subtitle}
          </p>
        </motion.div>

        {/* ── Hero Image ── */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative mb-12 aspect-video overflow-hidden rounded-2xl border border-surface/50 bg-surface/20 sm:mb-16 sm:rounded-3xl"
        >
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 960px"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* ── Tags ── */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap gap-2 sm:mb-16"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-accent/30 px-4 py-1.5 font-jetbrains text-[10px] tracking-[0.15em] text-accent"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* ── Description ── */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <SectionHeading title="About This Project" />
          <div className="mt-6 flex flex-col gap-5 sm:mt-8">
            {project.longDescription.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="text-sm leading-[1.9] text-accent/85 sm:text-base sm:leading-loose"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* ── Key Highlights ── */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <SectionHeading title="Key Highlights" />
          <ul className="mt-6 flex flex-col gap-4 sm:mt-8">
            {project.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 text-sm text-accent/85 sm:text-base"
              >
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                {highlight}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ── Links ── */}
        {project.links.length > 0 && (
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <SectionHeading title="Links" />
            <div className="mt-6 flex flex-wrap gap-4 sm:mt-8">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-accent/40 px-6 py-3 font-jetbrains text-xs font-medium tracking-[0.2em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10"
                >
                  {link.label.toUpperCase()}
                  <ExternalLink
                    size={12}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Bottom Divider ── */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="border-t border-surface/50 pt-10"
        >
          <Link
            href="/project"
            className="group inline-flex items-center gap-2 font-jetbrains text-xs tracking-[0.2em] text-muted transition-colors duration-300 hover:text-accent"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            ALL PROJECTS
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── Sub-components ── */

function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-accent sm:text-2xl">{title}</h2>
      <span className="mt-2 block h-px w-16 bg-muted/60" />
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-surface/50 bg-surface/10 p-4 sm:p-5">
      <span className="block font-jetbrains text-[10px] tracking-widest text-muted/70">
        {label.toUpperCase()}
      </span>
      <span className="mt-1 block text-sm font-medium text-accent sm:text-base">
        {value}
      </span>
    </div>
  );
}
