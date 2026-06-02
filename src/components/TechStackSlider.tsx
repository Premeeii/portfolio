"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  "React",
  "React Native",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "SQL",
  "Node.js",
  "Spring Boot",
  "Java",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "Git",
  "REST API",
  "Figma",
];

interface TechStackSliderProps {
  className?: string;
}

export default function TechStackSlider({ className = "" }: TechStackSliderProps) {
  // Duplicate the list to create seamless infinite loop
  const duplicated = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className={`overflow-hidden py-12 text-center sm:py-2 ${className}`}>
      {/* Label */}
      <p className="font-jetbrains mb-6 px-6 text-xs tracking-[0.2em] text-muted sm:px-8 sm:text-sm">
        {"My Tech Stack"}
      </p>

      {/* Slider track */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent sm:w-24" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent sm:w-24" />

        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicated.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="shrink-0 rounded-full border border-surface px-10 py-5 font-jetbrains text-xs tracking-wider text-accent transition-colors hover:border-accent hover:bg-accent/5 sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
