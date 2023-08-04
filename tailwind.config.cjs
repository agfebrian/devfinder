/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "app-primary": "#0079FF",
        "app-primary-hover": "#60ABFF",
        "app-grey": "#90A4D4",
        "app-grey-1": "#697C9A",
        "app-grey-2": "#4B6A9B",
        "app-grey-3": "#1E2A47",
        "app-grey-4": "#2B3442",
        "app-grey-5": "#222731",
        "app-red": "#F74646",
        "app-light": "#F6F8FF",
        "app-dark": "#141D2F",
      },
      fontFamily: {
        sans: ["SpaceMono", "sans-serif"],
        serif: ["SpaceMono", "serif"],
      },
    },
  },
  plugins: [],
};
