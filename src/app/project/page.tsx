"use client";

import { motion } from "framer-motion";

export default function Project() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-accent sm:text-5xl">
          Project
        </h1>
        <p className="mt-4 text-lg text-muted">
          Explore my work
        </p>
      </motion.div>
    </section>
  );
}
