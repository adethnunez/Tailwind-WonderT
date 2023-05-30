/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark: "hsl(208.7,51.11%,17.65%)",
        light: "hsl(208.7,51.11%,17.65%)",
        primary: "hsl(175.96,98.89%,35.29%)",
      }
    },
  },
  plugins: [],
}

