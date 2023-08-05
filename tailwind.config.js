/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#23A455",
          black: "#010022",
        },
        semantic: {
          green: "#00AC45",
          yellow: "#D6CE12",
          red: "#B71E41",
        },
      },
    },
  },
  // plugins: [],

   plugins: [require("rippleui")],
};
