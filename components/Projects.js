"use client";

import { motion } from "framer-motion";
import { FiFolder } from "react-icons/fi";
import RevealSection, { StaggerGroup, StaggerItem } from "./RevealSection";
import { projects } from "@/data/resume";
import { colorAt } from "@/lib/colors";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <RevealSection className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
          Projects
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Selected work
        </h2>
      </RevealSection>

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((proj, index) => {
          const color = colorAt(index + 3);
          return (
            <StaggerItem key={proj.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className={`h-full rounded-2xl glass-card p-7 transition-all ${color.border} ${color.glow}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${color.iconBg} ${color.icon}`}
                  >
                    <FiFolder size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{proj.name}</h3>
                </div>

                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-white/55">
                  {proj.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-1 text-xs ${color.tag}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
