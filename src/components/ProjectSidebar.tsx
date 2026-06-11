"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
}

interface ProjectSidebarProps {
  projects: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function ProjectSidebar({
  projects,
  activeIndex,
  onSelect,
}: ProjectSidebarProps) {
  return (
    <nav className="flex flex-col gap-6" aria-label="Project list">
      {projects.map((project, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={project.id}
            type="button"
            onClick={() => onSelect(index)}
            className="group relative cursor-pointer py-2 pl-5 text-left transition-all duration-300"
            aria-current={isActive ? "true" : undefined}
          >
            {/* Active indicator bar */}
            <motion.span
              className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-muted"
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scaleY: isActive ? 1 : 0.4,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* Category label */}
            <motion.span
              className="block font-jetbrains tracking-widest"
              initial={false}
              animate={{
                fontSize: isActive ? "16px" : "13px",
                color: isActive ? "#FCECD3" : "#948979",
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {project.category}
            </motion.span>

            {/* Project title */}
            <motion.span
              className="mt-1 block font-bold leading-tight"
              initial={false}
              animate={{
                fontSize: isActive ? "28px" : "18px",
                color: isActive ? "#FCECD3" : "#948979",
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {project.title}
            </motion.span>
          </button>
        );
      })}
    </nav>
  );
}
