"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiGithub, FiMail } from "react-icons/fi";
import { profile } from "@/data/resume";
import ProfileAvatar from "./ProfileAvatar";

function TypedTagline() {
  const lines = profile.tagline;
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIndex % lines.length];
    const speed = deleting ? 35 : 55;
    const pause = 1600;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setLineIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, lineIndex, lines]);

  return (
    <span className="text-accent-light">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl animate-blob dark:bg-accent/30" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-accent-teal/20 blur-3xl animate-blob-slow dark:bg-accent-teal/20" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl animate-blob dark:bg-fuchsia-600/15" />
      <div className="pointer-events-none absolute top-10 right-1/4 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl animate-blob-slow dark:bg-amber-500/10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-fg/10 bg-fg/5 px-4 py-1.5 text-xs font-medium text-fg/70"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-tight text-fg sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-4 text-xl font-semibold text-fg/80 sm:text-2xl"
          >
            {profile.title}
          </motion.h2>

          <motion.div variants={item} className="mt-4 h-7 font-mono text-base sm:text-lg">
            <TypedTagline />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-fg/60 leading-relaxed">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/api/resume"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-light"
            >
              <FiDownload /> Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-fg/15 bg-fg/5 px-6 py-3 text-sm font-semibold text-fg transition-colors hover:bg-fg/10"
            >
              <FiMail /> Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08, rotate: -4 }}
              whileTap={{ scale: 0.95 }}
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-fg/15 bg-fg/5 text-fg transition-colors hover:bg-fg/10"
            >
              <FiGithub size={18} />
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-fg">{stat.value}</p>
                <p className="mt-1 text-xs text-fg/50 leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto flex aspect-square w-56 items-center justify-center sm:w-72 md:w-full md:max-w-sm"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-fg/15"
          />
          <motion.div
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative h-[86%] w-[86%] overflow-hidden rounded-full border-4 border-fg/10 shadow-2xl shadow-accent/20 animate-float"
          >
            <ProfileAvatar
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-fg/40 hover:text-fg/80 sm:block"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
