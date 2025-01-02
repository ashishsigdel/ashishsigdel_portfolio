import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        geist: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
        "edu-au-vic": [
          "var(--font-edu-au-vic)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        skin: "#5caf90",
        danger: "#dc3545",
        warning: "#ffc107",
        success: "#198754",
        "dark-black": "#0d1117",
        "light-white": "#efefef",
        "form-background": "#efefef",
        "dark-form-background": "#0d1117",
        "portfolio-primary": "#047ada",
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
