import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          light: '#84F84D',
          DEFAULT: '#62F61C',
          dark: '#4BD609',
        },
        secondary:{
          light: '#4DD8F8',
          DEFAULT: '#1CCDF6',
          dark: '#09B9D6',
        },
        tertiary: {
          light: '#FF7C1E',
          DEFAULT: '#EA6200',
          dark: '#DB5C00',
        }
      },
    },
  },
  plugins: [nextui()],
};
export default config;
