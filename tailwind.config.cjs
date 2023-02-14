/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
    "./public/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },

      textColor: {
        primary: "rgba(255,255,255,0.87)",
        secondary: "rgba(255,255,255,0.60)",
      },
      fontFamily: {
        primary: ["Contrail One", "cursive"],
        secondary: ["Poppins", "sans-serif"],
      },
      animation: {
        "zero-to-hero": "zeroToHero .7s linear 1 forwards",
        "first-appearance": "firstAppearance .2s linear forwards",
      },
      keyframes: {
        zeroToHero: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        firstAppearance: {
          "0%": { opacity: "0", transform: "translatey(10px)" },
          "100%": { opacity: "1", transform: "translatey(0)" },
        },
      },
    },
  },
  plugins: [],
};
