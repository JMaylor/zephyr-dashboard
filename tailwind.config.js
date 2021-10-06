module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        spacing: "margin, padding",
      },
      // height: {
      //   header: "calc(100vh - 7rem)",
      // },
      // fontFamily: {
      //   sans: ["BlinkMacSystemFont", "ui-sans-serif", "system-ui"],
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
