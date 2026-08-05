import type { Config } from "tailwindcss";

// NOTE: Colors below read from CSS custom properties that are generated
// at request-time in `src/app/layout.tsx` from `src/config/site.config.ts`.
// To re-skin this template for a new company, you generally do NOT need to
// touch this file — just change the hex values in `site.config.ts`.
//
// Each CSS variable stores an "R G B" channel triple (not a hex string), and
// the helper below wraps it as `rgb(var(--x) / <alpha-value>)`. This is what
// makes Tailwind's opacity modifiers (e.g. `bg-primary/20`) work — Tailwind
// can only apply an opacity modifier to a color function, not a raw string.
const withOpacity = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: withOpacity("--color-primary"),
          light: withOpacity("--color-primary-light"),
          dark: withOpacity("--color-primary-dark"),
        },
        accent: {
          DEFAULT: withOpacity("--color-accent"),
          light: withOpacity("--color-accent-light"),
          dark: withOpacity("--color-accent-dark"),
        },
        surface: {
          DEFAULT: withOpacity("--color-surface"),
          alt: withOpacity("--color-surface-alt"),
        },
        ink: {
          DEFAULT: withOpacity("--color-ink"),
          soft: withOpacity("--color-ink-soft"),
          muted: withOpacity("--color-ink-muted"),
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(20, 40, 34, 0.12)",
        card: "0 8px 30px -8px rgba(20, 40, 34, 0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
