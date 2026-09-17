/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050508",
        panel: "#0d0d14",
        accent: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          teal: "#2dd4bf",
        },
        // Foreground ink color: white in dark mode, near-black in light mode.
        // Lets existing `text-fg/60`-style opacity utilities flip themes
        // without touching every className.
        fg: "rgb(var(--fg) / <alpha-value>)",
        // Base page surface: same value as `ink` in dark mode, white in light.
        surface: "rgb(var(--surface) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      animation: {
        blob: "blob 18s infinite ease-in-out",
        "blob-slow": "blob 26s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-25px, 25px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
