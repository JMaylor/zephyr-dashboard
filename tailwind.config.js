const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors,
      height: {
        header: 'calc(100vh - 7rem)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
