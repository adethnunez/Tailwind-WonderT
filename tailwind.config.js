/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark: "hsl(208.7,51.11%,17.65%)",
        light: "hsl(208.7,51.11%,17.65%)",
        primary: "hsl(175.96,98.89%,35.29%)",
        itim:'#323232',
        puti:'#ffffff',
        grey: '#f6f6f6',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage:{
        'slider1': 'url("./img/slider1.jpg")',
        'slider2': 'url("./img/slider2.jpg")',
        'slider3': 'url("./img/slider3.jpg")',
      }
    },
  },
  plugins: [],
}

