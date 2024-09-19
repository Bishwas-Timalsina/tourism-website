/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        "3xl": "1920px", // Screen width 1920px
      },
      colors: {
        secondary: "#eefbfd",
        hover: "#113D48",
        primary: "#1CA8CB",
        black: "#1e1e1e",
        neutral: "#7D8282",
        dark: "#113D48",
      },
      fontFamily: {
        cursive: ['"Dancing Script"', "cursive"],
      },
    },
  },
};
