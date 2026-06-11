"use client";

import { AnimatePresence, motion } from "framer-motion";

interface ProjectDescriptionProps {
  description: string;
  tags: string[];
  activeIndex: number;
}

export default function ProjectDescription({
  description,
  tags,
  activeIndex,
}: ProjectDescriptionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        className="flex flex-col justify-center gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
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

        {/* Description */}
        <p className="font-jetbrains text-sm leading-[1.9] tracking-wide text-accent/90">
          {description}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
