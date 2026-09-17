// Shared color palette for adding variety across sections while keeping the
// dark background untouched — only icons, badges, borders, and labels rotate
// through these hues.
export const palette = [
  {
    text: "text-violet-300",
    icon: "text-violet-300",
    iconBg: "bg-violet-500/15",
    border: "hover:border-violet-400/50",
    ring: "border-violet-400/60",
    dot: "bg-violet-400",
    tag: "border-violet-400/30 bg-violet-500/10 text-violet-200",
    glow: "hover:shadow-lg hover:shadow-violet-500/10",
  },
  {
    text: "text-teal-300",
    icon: "text-teal-300",
    iconBg: "bg-teal-500/15",
    border: "hover:border-teal-400/50",
    ring: "border-teal-400/60",
    dot: "bg-teal-400",
    tag: "border-teal-400/30 bg-teal-500/10 text-teal-200",
    glow: "hover:shadow-lg hover:shadow-teal-500/10",
  },
  {
    text: "text-rose-300",
    icon: "text-rose-300",
    iconBg: "bg-rose-500/15",
    border: "hover:border-rose-400/50",
    ring: "border-rose-400/60",
    dot: "bg-rose-400",
    tag: "border-rose-400/30 bg-rose-500/10 text-rose-200",
    glow: "hover:shadow-lg hover:shadow-rose-500/10",
  },
  {
    text: "text-amber-300",
    icon: "text-amber-300",
    iconBg: "bg-amber-500/15",
    border: "hover:border-amber-400/50",
    ring: "border-amber-400/60",
    dot: "bg-amber-400",
    tag: "border-amber-400/30 bg-amber-500/10 text-amber-200",
    glow: "hover:shadow-lg hover:shadow-amber-500/10",
  },
  {
    text: "text-sky-300",
    icon: "text-sky-300",
    iconBg: "bg-sky-500/15",
    border: "hover:border-sky-400/50",
    ring: "border-sky-400/60",
    dot: "bg-sky-400",
    tag: "border-sky-400/30 bg-sky-500/10 text-sky-200",
    glow: "hover:shadow-lg hover:shadow-sky-500/10",
  },
  {
    text: "text-emerald-300",
    icon: "text-emerald-300",
    iconBg: "bg-emerald-500/15",
    border: "hover:border-emerald-400/50",
    ring: "border-emerald-400/60",
    dot: "bg-emerald-400",
    tag: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
    glow: "hover:shadow-lg hover:shadow-emerald-500/10",
  },
  {
    text: "text-fuchsia-300",
    icon: "text-fuchsia-300",
    iconBg: "bg-fuchsia-500/15",
    border: "hover:border-fuchsia-400/50",
    ring: "border-fuchsia-400/60",
    dot: "bg-fuchsia-400",
    tag: "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200",
    glow: "hover:shadow-lg hover:shadow-fuchsia-500/10",
  },
];

export function colorAt(index) {
  return palette[index % palette.length];
}
