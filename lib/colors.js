// Shared color palette used across sections in both themes.
// - `card`: the tile's own background — solid saturated tint in light mode,
//   the original translucent glass in dark mode (replaces `.glass-card` on
//   any tile that should carry its own color rather than a neutral surface).
// - `iconBg`/`icon`: a colorful gradient badge in light mode, the previous
//   flat translucent badge in dark mode.
export const palette = [
  {
    text: "text-violet-700 dark:text-violet-300",
    icon: "text-white dark:text-violet-300",
    iconBg: "bg-gradient-to-br from-violet-400 to-violet-600 shadow-md shadow-violet-500/30 dark:bg-violet-500/15 dark:from-transparent dark:to-transparent dark:shadow-none",
    card: "bg-violet-50 border border-violet-200/80 shadow-sm shadow-violet-200/50 backdrop-blur-sm dark:bg-white/[0.035] dark:border-white/10 dark:shadow-none dark:backdrop-blur-lg",
    border: "hover:border-violet-400 dark:hover:border-violet-400/50",
    tag: "border-violet-300 bg-white/70 text-violet-700 dark:border-violet-400/30 dark:bg-violet-500/10 dark:text-violet-200",
    glow: "hover:shadow-lg hover:shadow-violet-500/20",
  },
  {
    text: "text-teal-700 dark:text-teal-300",
    icon: "text-white dark:text-teal-300",
    iconBg: "bg-gradient-to-br from-teal-400 to-teal-600 shadow-md shadow-teal-500/30 dark:bg-teal-500/15 dark:from-transparent dark:to-transparent dark:shadow-none",
    card: "bg-teal-50 border border-teal-200/80 shadow-sm shadow-teal-200/50 backdrop-blur-sm dark:bg-white/[0.035] dark:border-white/10 dark:shadow-none dark:backdrop-blur-lg",
    border: "hover:border-teal-400 dark:hover:border-teal-400/50",
    tag: "border-teal-300 bg-white/70 text-teal-700 dark:border-teal-400/30 dark:bg-teal-500/10 dark:text-teal-200",
    glow: "hover:shadow-lg hover:shadow-teal-500/20",
  },
  {
    text: "text-rose-700 dark:text-rose-300",
    icon: "text-white dark:text-rose-300",
    iconBg: "bg-gradient-to-br from-rose-400 to-rose-600 shadow-md shadow-rose-500/30 dark:bg-rose-500/15 dark:from-transparent dark:to-transparent dark:shadow-none",
    card: "bg-rose-50 border border-rose-200/80 shadow-sm shadow-rose-200/50 backdrop-blur-sm dark:bg-white/[0.035] dark:border-white/10 dark:shadow-none dark:backdrop-blur-lg",
    border: "hover:border-rose-400 dark:hover:border-rose-400/50",
    tag: "border-rose-300 bg-white/70 text-rose-700 dark:border-rose-400/30 dark:bg-rose-500/10 dark:text-rose-200",
    glow: "hover:shadow-lg hover:shadow-rose-500/20",
  },
  {
    text: "text-amber-700 dark:text-amber-300",
    icon: "text-white dark:text-amber-300",
    iconBg: "bg-gradient-to-br from-amber-400 to-amber-600 shadow-md shadow-amber-500/30 dark:bg-amber-500/15 dark:from-transparent dark:to-transparent dark:shadow-none",
    card: "bg-amber-50 border border-amber-200/80 shadow-sm shadow-amber-200/50 backdrop-blur-sm dark:bg-white/[0.035] dark:border-white/10 dark:shadow-none dark:backdrop-blur-lg",
    border: "hover:border-amber-400 dark:hover:border-amber-400/50",
    tag: "border-amber-300 bg-white/70 text-amber-700 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-200",
    glow: "hover:shadow-lg hover:shadow-amber-500/20",
  },
  {
    text: "text-sky-700 dark:text-sky-300",
    icon: "text-white dark:text-sky-300",
    iconBg: "bg-gradient-to-br from-sky-400 to-sky-600 shadow-md shadow-sky-500/30 dark:bg-sky-500/15 dark:from-transparent dark:to-transparent dark:shadow-none",
    card: "bg-sky-50 border border-sky-200/80 shadow-sm shadow-sky-200/50 backdrop-blur-sm dark:bg-white/[0.035] dark:border-white/10 dark:shadow-none dark:backdrop-blur-lg",
    border: "hover:border-sky-400 dark:hover:border-sky-400/50",
    tag: "border-sky-300 bg-white/70 text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/10 dark:text-sky-200",
    glow: "hover:shadow-lg hover:shadow-sky-500/20",
  },
  {
    text: "text-emerald-700 dark:text-emerald-300",
    icon: "text-white dark:text-emerald-300",
    iconBg: "bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-md shadow-emerald-500/30 dark:bg-emerald-500/15 dark:from-transparent dark:to-transparent dark:shadow-none",
    card: "bg-emerald-50 border border-emerald-200/80 shadow-sm shadow-emerald-200/50 backdrop-blur-sm dark:bg-white/[0.035] dark:border-white/10 dark:shadow-none dark:backdrop-blur-lg",
    border: "hover:border-emerald-400 dark:hover:border-emerald-400/50",
    tag: "border-emerald-300 bg-white/70 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200",
    glow: "hover:shadow-lg hover:shadow-emerald-500/20",
  },
  {
    text: "text-fuchsia-700 dark:text-fuchsia-300",
    icon: "text-white dark:text-fuchsia-300",
    iconBg: "bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 shadow-md shadow-fuchsia-500/30 dark:bg-fuchsia-500/15 dark:from-transparent dark:to-transparent dark:shadow-none",
    card: "bg-fuchsia-50 border border-fuchsia-200/80 shadow-sm shadow-fuchsia-200/50 backdrop-blur-sm dark:bg-white/[0.035] dark:border-white/10 dark:shadow-none dark:backdrop-blur-lg",
    border: "hover:border-fuchsia-400 dark:hover:border-fuchsia-400/50",
    tag: "border-fuchsia-300 bg-white/70 text-fuchsia-700 dark:border-fuchsia-400/30 dark:bg-fuchsia-500/10 dark:text-fuchsia-200",
    glow: "hover:shadow-lg hover:shadow-fuchsia-500/20",
  },
];

export function colorAt(index) {
  return palette[index % palette.length];
}
