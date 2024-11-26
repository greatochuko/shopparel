/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-blue-100": "#1a75ff",
        "accent-blue-200": "#005ce6",
        "accent-blue-300": "#0050c9",
        primary: "#143064",
      },
    },
  },
  plugins: [],
};
