"use client";

import { FiCode, FiGlobe, FiTrendingUp, FiUsers } from "react-icons/fi";
import RevealSection, { StaggerGroup, StaggerItem } from "./RevealSection";
import { profile, education, certificates } from "@/data/resume";
import { colorAt } from "@/lib/colors";

const highlights = [
  {
    icon: FiCode,
    title: "Full React Ecosystem",
    text: "Next.js, Redux Toolkit, React Query, TanStack, TypeScript, Tailwind CSS.",
  },
  {
    icon: FiTrendingUp,
    title: "Measurable Impact",
    text: "20–30% page-load reductions, real-time infra, resilient upload pipelines.",
  },
  {
    icon: FiGlobe,
    title: "Remote-First",
    text: "Async collaboration across UK, EU & US time zones with Agile teams.",
  },
  {
    icon: FiUsers,
    title: "Cross-Industry",
    text: "SaaS, healthcare, privacy, and blockchain platforms at production scale.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-rose-50/40 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <RevealSection className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-300">
            About Me
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fg sm:text-4xl">
            Turning complex requirements into fast, delightful UI
          </h2>
        </RevealSection>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
          <RevealSection direction="left">
            <p className="leading-relaxed text-fg/60">{profile.summary}</p>
            <p className="mt-5 leading-relaxed text-fg/60">{profile.summaryExtra}</p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="glass-card rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-fg/40">
                  Education
                </p>
                <ul className="mt-3 space-y-3">
                  {education.map((edu) => (
                    <li key={edu.degree}>
                      <p className="text-sm font-medium text-fg">{edu.degree}</p>
                      <p className="text-xs text-fg/50">{edu.school}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-fg/40">
                  Certificates
                </p>
                <ul className="mt-3 space-y-3">
                  {certificates.map((cert) => (
                    <li key={cert.name}>
                      <p className="text-sm font-medium text-fg">{cert.name}</p>
                      <p className="text-xs text-fg/50">{cert.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealSection>

          <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }, index) => {
              const color = colorAt(index);
              return (
                <StaggerItem key={title}>
                  <div
                    className={`group h-full rounded-2xl glass-card p-6 transition-all ${color.border} ${color.glow}`}
                  >
                    <div
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${color.iconBg} ${color.icon} transition-transform group-hover:scale-110`}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-fg">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg/55">{text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
