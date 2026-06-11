"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectPreviewProps {
  imageSrc: string;
  title: string;
  activeIndex: number;
}

export default function ProjectPreview({
  imageSrc,
  title,
  activeIndex,
}: ProjectPreviewProps) {
  return (
    <div className="flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="relative aspect-3/4 w-full max-w-[320px] overflow-hidden rounded-3xl border border-surface/50 bg-surface/20 shadow-2xl"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
