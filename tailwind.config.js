import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      ...colors,
      primaryGreen: "#CBE1D4",
      primaryPurple: "#BDB6DA",
    },
    extend: {
      fontFamily: {
        pupupu: ["Pupupu", "sans-serif"],
      },
    },
  },
  plugins: [],
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
};
