// Shared color palette for adding variety across sections in both themes.
// Each entry carries a light-mode shade (deeper, for contrast on white/pastel
// backgrounds) and a dark-mode shade (lighter, as before) side by side, so
// components using these classes automatically adapt when `.dark` toggles.
export const palette = [
  {
    text: "text-violet-600 dark:text-violet-300",
    icon: "text-violet-600 dark:text-violet-300",
    iconBg: "bg-violet-100 dark:bg-violet-500/15",
    border: "hover:border-violet-400 dark:hover:border-violet-400/50",
    ring: "border-violet-500 dark:border-violet-400/60",
    dot: "bg-violet-500 dark:bg-violet-400",
    tag: "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-400/30 dark:bg-violet-500/10 dark:text-violet-200",
    glow: "hover:shadow-lg hover:shadow-violet-500/10",
  },
  {
    text: "text-teal-600 dark:text-teal-300",
    icon: "text-teal-600 dark:text-teal-300",
    iconBg: "bg-teal-100 dark:bg-teal-500/15",
    border: "hover:border-teal-400 dark:hover:border-teal-400/50",
    ring: "border-teal-500 dark:border-teal-400/60",
    dot: "bg-teal-500 dark:bg-teal-400",
    tag: "border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-400/30 dark:bg-teal-500/10 dark:text-teal-200",
    glow: "hover:shadow-lg hover:shadow-teal-500/10",
  },
  {
    text: "text-rose-600 dark:text-rose-300",
    icon: "text-rose-600 dark:text-rose-300",
    iconBg: "bg-rose-100 dark:bg-rose-500/15",
    border: "hover:border-rose-400 dark:hover:border-rose-400/50",
    ring: "border-rose-500 dark:border-rose-400/60",
    dot: "bg-rose-500 dark:bg-rose-400",
    tag: "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-400/30 dark:bg-rose-500/10 dark:text-rose-200",
    glow: "hover:shadow-lg hover:shadow-rose-500/10",
  },
  {
    text: "text-amber-600 dark:text-amber-300",
    icon: "text-amber-600 dark:text-amber-300",
    iconBg: "bg-amber-100 dark:bg-amber-500/15",
    border: "hover:border-amber-400 dark:hover:border-amber-400/50",
    ring: "border-amber-500 dark:border-amber-400/60",
    dot: "bg-amber-500 dark:bg-amber-400",
    tag: "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-200",
    glow: "hover:shadow-lg hover:shadow-amber-500/10",
  },
  {
    text: "text-sky-600 dark:text-sky-300",
    icon: "text-sky-600 dark:text-sky-300",
    iconBg: "bg-sky-100 dark:bg-sky-500/15",
    border: "hover:border-sky-400 dark:hover:border-sky-400/50",
    ring: "border-sky-500 dark:border-sky-400/60",
    dot: "bg-sky-500 dark:bg-sky-400",
    tag: "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/10 dark:text-sky-200",
    glow: "hover:shadow-lg hover:shadow-sky-500/10",
  },
  {
    text: "text-emerald-600 dark:text-emerald-300",
    icon: "text-emerald-600 dark:text-emerald-300",
    iconBg: "bg-emerald-100 dark:bg-emerald-500/15",
    border: "hover:border-emerald-400 dark:hover:border-emerald-400/50",
    ring: "border-emerald-500 dark:border-emerald-400/60",
    dot: "bg-emerald-500 dark:bg-emerald-400",
    tag: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200",
    glow: "hover:shadow-lg hover:shadow-emerald-500/10",
  },
  {
    text: "text-fuchsia-600 dark:text-fuchsia-300",
    icon: "text-fuchsia-600 dark:text-fuchsia-300",
    iconBg: "bg-fuchsia-100 dark:bg-fuchsia-500/15",
    border: "hover:border-fuchsia-400 dark:hover:border-fuchsia-400/50",
    ring: "border-fuchsia-500 dark:border-fuchsia-400/60",
    dot: "bg-fuchsia-500 dark:bg-fuchsia-400",
    tag: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 dark:border-fuchsia-400/30 dark:bg-fuchsia-500/10 dark:text-fuchsia-200",
    glow: "hover:shadow-lg hover:shadow-fuchsia-500/10",
  },
];

export function colorAt(index) {
  return palette[index % palette.length];
}
