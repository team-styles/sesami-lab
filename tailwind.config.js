/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
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
