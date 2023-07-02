/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    colors:{
      ...colors,
      'primary': '#E6B31E',
      'secondary': '#CACACA',
      'nwhite': '#FCFAF1',
      'nblack': '#343434',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 1s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite'
      },
      width: {
        '1600': '1600px',
      }
    },
  },
  plugins: [],
}