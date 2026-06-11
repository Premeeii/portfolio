"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectSidebar from "@/components/ProjectSidebar";
import ProjectPreview from "@/components/ProjectPreview";
import ProjectDescription from "@/components/ProjectDescription";

const PROJECTS = [
  {
    id: "greenwin",
    category: "Mobile Application",
    title: "GreenWin",
    description:
      "A motorcycle taxi booking mobile application in Thammasat University. Built with a highly scalable microservices architecture designed to handle large-volume data processing. The platform provides real-time tracking, secure payment integration, and an intuitive user interface for both riders and drivers.",
    tags: ["REACT NATIVE", "SPRING BOOT", "MYSQL", "CLOUDINARY"],
    imageSrc: "/greenwin.jpeg",
  },
  {
    id: "aquarium",
    category: "Focus Web Application",
    title: "Aquarium",
    description:
      "An immersive focus timer web application that combines productivity with a relaxing aquarium experience. Users can grow their virtual aquarium by staying focused, with customizable ambient sounds and visual themes to enhance concentration.",
    tags: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION"],
    imageSrc: "/activity.jpg",
  },
  {
    id: "pokedex-1",
    category: "Web Application",
    title: "Pokedex",
    description:
      "A comprehensive Pokémon encyclopedia web application featuring detailed stats, evolution chains, and type matchups. Built with modern web technologies for a smooth, responsive browsing experience with advanced search and filtering capabilities.",
    tags: ["REACT", "TYPESCRIPT", "REST API", "CSS MODULES"],
    imageSrc: "/me2.jpeg",
  },
  {
    id: "pokedex-2",
    category: "Web Application",
    title: "Pokedex V2",
    description:
      "An upgraded version of the Pokedex application with enhanced features including team builder, damage calculator, and community features. Implements server-side rendering for improved performance and SEO optimization.",
    tags: ["NEXT.JS", "PRISMA", "POSTGRESQL", "DOCKER"],
    imageSrc: "/greenwin.jpeg",
  },
  {
    id: "inex-potion",
    category: "Mobile Application",
    title: "Inex-Potion",
    description:
      "A personal finance tracking mobile application that helps users manage their income and expenses with intuitive categorization, visual analytics, and budget planning tools. Features include recurring transaction tracking and financial goal setting.",
    tags: ["FLUTTER", "DART", "FIREBASE", "FIGMA"],
    imageSrc: "/activity.jpg",
  },
];

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS[activeIndex];

  return (
    <section className="flex min-h-[calc(100dvh-65px)] flex-col px-6 py-16 lg:py-50">
      {/* Page entrance animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-7xl flex-1"
      >
        {/* ── Desktop Layout (lg+) ── */}
        <div className="hidden h-full lg:grid lg:grid-cols-[1fr_1.1fr_1fr] lg:items-center lg:gap-8 xl:gap-12">
          {/* Left — Project Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <ProjectSidebar
              projects={PROJECTS}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
            />
          </motion.div>

          {/* Center — Project Preview Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <ProjectPreview
              imageSrc={activeProject.imageSrc}
              title={activeProject.title}
              activeIndex={activeIndex}
            />
          </motion.div>

          {/* Right — Project Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <ProjectDescription
              description={activeProject.description}
              tags={activeProject.tags}
              activeIndex={activeIndex}
            />
          </motion.div>
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
              activeIndex={activeIndex}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
