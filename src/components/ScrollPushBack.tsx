"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollPushBackProps {
  children: ReactNode;
  className?: string;
  /** Extra scroll height multiplier (e.g. 1.5 = 150vh wrapper) */
  scrollHeight?: number;
  /** Top offset for sticky (accounts for navbar) */
  stickyTop?: string;
}

export default function ScrollPushBack({
  children,
  className = "",
  scrollHeight = 1.4,
  stickyTop = "65px",
}: ScrollPushBackProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 0.3]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const filterValue = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <div
      ref={wrapperRef}
      style={{ minHeight: `${scrollHeight * 50}vh` }}
      className="relative"
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
          filter: filterValue,
          top: stickyTop,
        }}
        className={`sticky ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
