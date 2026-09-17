"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiCheckSquare,
  FiCloud,
  FiCpu,
  FiMonitor,
  FiServer,
  FiTool,
} from "react-icons/fi";
import RevealSection, { StaggerGroup, StaggerItem } from "./RevealSection";
import { skills } from "@/data/resume";
import { colorAt } from "@/lib/colors";

const categoryIcons = {
  Frontend: FiMonitor,
  Backend: FiServer,
  Cloud: FiCloud,
  "Core Skills": FiCpu,
  Testing: FiCheckSquare,
  Tools: FiTool,
  Monitoring: FiActivity,
};

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <RevealSection className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-300">
          Skills
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Tools & technologies I work with
        </h2>
      </RevealSection>

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => {
          const color = colorAt(index);
          const Icon = categoryIcons[group.category] ?? FiMonitor;
          return (
            <StaggerItem key={group.category}>
              <div
                className={`h-full rounded-2xl glass-card p-6 transition-all ${color.border} ${color.glow}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${color.iconBg} ${color.icon}`}
                  >
                    <Icon size={16} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${color.tag}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
