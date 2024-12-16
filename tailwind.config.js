/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        tangerine: ["Tangerine", "sans-serif"],
        parisienne: ["Parisienne", "sans-serif"],
        zendots: ["Zen Dots", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("daisyui")],
  daisyui: {
    themes: ["business"],
  },
};
