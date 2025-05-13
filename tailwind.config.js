/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato','sans-serif'],
        merriweather: ['Merriweather','sans-serif'],
      },
      colors: {
        primary : '#FA812F',
        second : '#FFB22C',
        support : '#F3C623',
        support2 : '#FFE9C8',
      },
    },
  },
  plugins: [],
}

