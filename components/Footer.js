import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-fg/10 bg-surface px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-fg/40 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
}
