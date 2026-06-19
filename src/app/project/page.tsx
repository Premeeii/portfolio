"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectSidebar from "@/components/ProjectSidebar";
import ProjectPreview from "@/components/ProjectPreview";
import ProjectDescription from "@/components/ProjectDescription";
import { PROJECTS } from "@/lib/projects";

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS[activeIndex];

  return (
    <section className="flex min-h-[calc(100dvh-65px)] flex-col px-6 py-16 lg:py-10">
      {/* Page entrance animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-7xl flex-1"
      >
        {/* ── Desktop Layout (lg+) ── */}
        <div className="hidden h-full lg:grid lg:grid-cols-[1.1fr_2fr] lg:items-start lg:gap-16 xl:gap-24">
          {/* Left — Project Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="sticky top-28"
          >
            <ProjectSidebar
              projects={PROJECTS}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
            />
          </motion.div>

          {/* Right — Project Details (Preview + Description stacked) */}
          <div className="flex flex-col gap-10">
            {/* Preview Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <ProjectPreview
                imageSrc={activeProject.imageSrc}
                title={activeProject.title}
                activeIndex={activeIndex}
              />
            </motion.div>

            {/* Description & Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <ProjectDescription
                description={activeProject.description}
                tags={activeProject.tags}
                href={activeProject.href}
                activeIndex={activeIndex}
              />
            </motion.div>
          </div>
        </div>

        {/* ── Mobile/Tablet Layout (< lg) ── */}
        <div className="flex flex-col gap-10 lg:hidden">
          {/* Sidebar as horizontal scroll on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProjectSidebar
              projects={PROJECTS}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
            />
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProjectPreview
              imageSrc={activeProject.imageSrc}
              title={activeProject.title}
              activeIndex={activeIndex}
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProjectDescription
              description={activeProject.description}
              tags={activeProject.tags}
              href={activeProject.href}
              activeIndex={activeIndex}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
