"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageSrc: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  imageSrc,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl border border-surface bg-surface/20"
    >
      <div className="grid sm:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src="greenwin.jpeg"
            alt={title}
            loading="lazy"
            className="aspect-4/3 h-full w-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-accent/30 px-3 py-1 font-jetbrains text-[10px] tracking-[0.15em] text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold leading-snug text-muted sm:text-2xl">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-accent">{description}</p>

          <Link
            href={href}
            className="mt-2 inline-flex items-center gap-2 font-jetbrains text-xs font-medium tracking-[0.2em] text-accent transition-colors hover:text-muted"
          >
            VIEW DETAILS
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
