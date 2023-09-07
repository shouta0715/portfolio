/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
        sans: ["Inter var", "sans-serif"],
      },
      animation: {
        "infinite-scroll-x-start":
          "infinite-scroll-x-start 30s linear infinite",
        "infinite-scroll-x-end": "infinite-scroll-x-end 30s linear infinite",
      },
      keyframes: {
        "infinite-scroll-x-start": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "infinite-scroll-x-end": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
export default config;
