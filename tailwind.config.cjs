/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,jsx,js}',
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: '#ffffff',
      },
      lemonade: {
        500: '#57E55D',
      },
      bluesky: {
        500: '#2EACBE',
      },
      grafite: {
        900: '#211D1A',
        700: '#211D1A2B',
        200: '#9B9B9B',
      },
      silver: {
        200: '#EDF5F0',
        300: '#D8DEDA',
        400: '#C3C8C4',
        500: '#AEB1AE',
        600: '#999B98',
        700: '#848482',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [
    require('@headlessui/react'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
