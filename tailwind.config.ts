import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/home/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        secondary: {
          50: "#eff1fb",
          100: "#dee4f7",
          200: "#b9c6ee",
          300: "#98abe6",
          400: "#738cdd",
          500: "#5270d5",
          600: "#2e4fbd",
          700: "#233c90",
          800: "#17285e",
          900: "#0c1531",
          950: "#060a19",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

// --color-secondary-50: #eff1fb;
// --color-secondary-100: #dee4f7;
// --color-secondary-200: #b9c6ee;
// --color-secondary-300: #98abe6;
// --color-secondary-400: #738cdd;
// --color-secondary-500: #5270d5;
// --color-secondary-600: #2e4fbd;
// --color-secondary-700: #233c90;
// --color-secondary-800: #17285e;
// --color-secondary-900: #0c1531;
// --color-secondary-950: #060a19;
