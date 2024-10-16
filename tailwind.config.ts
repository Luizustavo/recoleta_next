import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      colors: {
        analog: {
          green: "#A6FA7E",
          blue: "#7EE3FA",
          orange: "#FF9A51",
        },
        primary: {
          green: "#84F84D",
          blue: "#4DD8F8",
          orange: "#FF7C1E",

          light: "#84F84D",
          DEFAULT: "#62F61C",
          dark: "#4BD609",
        },
        secondary: {
          green: "#62F61C",
          blue: "#1CCDF6",
          orange: "#EA6200",

          light: "#4DD8F8",
          DEFAULT: "#1CCDF6",
          dark: "#09B9D6",
        },
        tertiary: {
          green: "#4BD609",
          blue: "#09B9D6",
          orange: "#EA6200",

          light: "#FF7C1E",
          DEFAULT: "#EA6200",
          dark: "#DB5C00",
        },
        quaternary: {
          green: "#1f6300",
          blue: "#005265",
          orange: "#5d2700",

          light: "#FF7C1E",
          DEFAULT: "#EA6200",
          dark: "#DB5C00",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Custom sans font
        serif: ["Roboto Slab", "serif"], // Custom serif font
      },
      fontSize: {
        "caption-default": "var(--caption-default)",
        "caption-small": "var(--caption-small)",

        "body-small": "var(--body-small)",
        "body-default": "var(--body-default)",
        "body-large": "var(--body-large)",

        "heading-small": "var(--heading-small)",
        "heading-default": "var(--heading-default)",
        "heading-large": "var(--heading-large)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
