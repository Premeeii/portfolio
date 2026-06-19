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
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="relative aspect-video w-full overflow-hidden rounded-2xl  bg-surface/20 shadow-[0_0_30px_rgba(56,189,248,0.15)]"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
