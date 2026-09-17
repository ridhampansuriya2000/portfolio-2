"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiDownload } from "react-icons/fi";
import RevealSection, { StaggerGroup, StaggerItem } from "./RevealSection";
import { profile } from "@/data/resume";

const links = [
  {
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: `@${profile.github}`,
    href: profile.githubUrl,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <RevealSection className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
          Contact
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s build something great together
        </h2>
        <p className="mt-4 text-white/60">{profile.availability}</p>
      </RevealSection>

      <StaggerGroup className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
        {links.map(({ icon: Icon, label, value, href }) => (
          <StaggerItem key={label}>
            <motion.a
              whileHover={{ y: -4 }}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-full flex-col items-center gap-3 rounded-2xl glass-card p-6 text-center transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                <Icon size={18} />
              </span>
              <span className="text-xs uppercase tracking-wide text-white/40">{label}</span>
              <span className="break-all text-sm font-medium text-white">{value}</span>
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <RevealSection delay={0.15} className="mt-10 flex justify-center">
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="/api/resume"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-light"
        >
          <FiDownload /> Download Full Resume
        </motion.a>
      </RevealSection>
    </section>
  );
}
