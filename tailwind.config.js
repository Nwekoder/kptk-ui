/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      'fontFamily': {
        'satoshi': "'Satoshi', sans-serif"
      },
      'colors': {
        primary: '#FF8832',
        secondary: '#FFAD32',
        accent: '#3284FF',
        text: '#DFDFDF',
        background: '#292929',
        'dark-100': '#3A3A3A',
        'dark-200': '#343434',
        'dark-300': '#303030',
      }
    },
  },
  plugins: [],
}

