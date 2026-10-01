import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jost)", "sans-serif"],
        heading: ["var(--font-jost)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#AED2C2",
          hover: "#9bc4b3",
          foreground: "#000000",
        },
        background: "#ffffff",
        foreground: "#000000",
        accent: {
          DEFAULT: "#f8fafc",
          hover: "#f1f5f9",
          foreground: "#000000",
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
