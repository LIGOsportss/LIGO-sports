import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#0C0C0E",
          soft: "#111114",
        },
        surface: {
          DEFAULT: "#17171B",
          raised: "#1E1E23",
        },
        line: "rgba(246, 243, 236, 0.09)",
        ligo: {
          yellow: "#F4C51E",
          lime: "#C7F24B",
          cyan: "#49E3C4",
          white: "#F6F3EC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        content: "1240px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
