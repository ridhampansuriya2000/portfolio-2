"use client";

import { motion } from "framer-motion";
import RevealSection, { StaggerGroup, StaggerItem } from "./RevealSection";
import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <RevealSection className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
          Skills
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Tools & technologies I work with
        </h2>
      </RevealSection>

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <StaggerItem key={group.category}>
            <div className="h-full rounded-2xl glass-card p-6 transition-colors hover:border-accent/40">
              <h3 className="font-display text-base font-semibold text-white">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-accent/50 hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
