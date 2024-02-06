import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#333",
      },
      fontFamily: {
        sans: ["Inter var", "Inter", "sans-serif"],
      },
      height: {
        "screen-1/2": "50vh",
        "screen-1/3": "33.333333vh",
        "screen-2/3": "66.666667vh",
        "screen-1/4": "25vh",
        "screen-3/4": "75vh",
        "screen-1/5": "20vh",
    },
    width: {
      "75" : "75%",
      "70" : "70%",
      "80" : "80%",
      "85" : "85%",
      "90" : "90%",
      "95" : "95%",
      "96" : "96%",
    },
    minHeight: { 
      "1/2": "50vh",
      "1/3": "33.333333vh",
      "2/3": "66.666667vh",
      "1/4": "25vh",
      "1/5": "20vh",
    },
    maxHeight: {
      "1/2": "50vh",
      "1/3": "33.333333vh",
      "2/3": "66.666667vh",
      "1/4": "25vh",
      "1/5": "20vh",
    },
  },
  },
  plugins: [],
};
export default config;
