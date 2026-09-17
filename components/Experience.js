"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import RevealSection from "./RevealSection";
import { experience } from "@/data/resume";
import { colorAt } from "@/lib/colors";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-teal-50/40 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <RevealSection className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-300">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fg sm:text-4xl">
            Where I&apos;ve made an impact
          </h2>
        </RevealSection>

        <div className="relative mt-16">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-fg/10 sm:left-1/2" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-400 via-teal-400 to-rose-400/40 sm:left-1/2"
          />

          <div className="space-y-14">
            {experience.map((job, index) => {
              const isEven = index % 2 === 0;
              const color = colorAt(index);
              return (
                <div
                  key={job.company}
                  className={`relative flex flex-col gap-4 pl-10 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-surface ${color.ring} ${color.icon} sm:left-1/2 sm:-translate-x-1/2`}
                  >
                    <FiBriefcase size={14} />
                  </motion.div>

                  <RevealSection
                    direction={isEven ? "left" : "right"}
                    className={`${isEven ? "sm:col-start-1 sm:text-right sm:pr-14" : "sm:col-start-2 sm:pl-14"}`}
                  >
                    <div className={`rounded-2xl glass-card p-6 transition-all ${color.border} ${color.glow}`}>
                      <p className={`text-xs font-semibold uppercase tracking-wide ${color.text}`}>
                        {job.period}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-semibold text-fg">
                        {job.role}
                      </h3>
                      <p className="text-sm font-medium text-fg/70">{job.company}</p>
                      <p
                        className={`mt-1 flex items-center gap-1.5 text-xs text-fg/40 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        <FiMapPin size={12} /> {job.location}
                      </p>
                      <ul
                        className={`mt-4 space-y-2 text-sm leading-relaxed text-fg/55 ${
                          isEven ? "sm:text-right" : "text-left"
                        }`}
                      >
                        {job.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </RevealSection>

                  <div className={isEven ? "hidden sm:block" : "hidden sm:block sm:col-start-1 sm:row-start-1"} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
