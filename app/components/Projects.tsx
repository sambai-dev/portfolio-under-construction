"use client";

// Projects Section - Enhanced portfolio display with recruiter-friendly features
// Features:
// - Animated heading and description
// - Responsive grid (1 col mobile, 2 cols desktop with featured spanning full width)

import { portfolioProjects } from "@/app/lib/constants";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="relative z-10 py-14 sm:py-20" id="projects">
      {/* Subtle background gradient for section separation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-dark-200/30 to-transparent" />
      {/* Section header */}
      <div className="space-y-3 mb-10">
        <motion.h2
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl font-bold text-stone-200"
        >
          My Portfolio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm sm:text-base max-w-lg text-stone-400"
        >
          Production-ready projects showcasing full-stack capabilities.
        </motion.p>
      </div>

      {/* Projects grid - 2 columns for impact */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
