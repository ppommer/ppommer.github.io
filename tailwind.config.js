/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        backgroundFirstLayer: "rgba(1,1,1,1)",
        backgroundSecondLayer: "rgba(39,39,42,.9)",
        backgroundLightFirstLayer: "rgb(250, 250, 250)",
        backgroundLightSecondLayer: "",
        primary: {
          400: "#5BDEFA",
          500: "#49B2C8",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
