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
    extend: {
      keyframes: {
        leftToRight: {
          '0%': { transform: 'translateX(-20%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        rightToLeft: {
          '0%': { transform: 'translateX(20%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        bottomToTop: {
          '0%': { transform: 'translateY(20%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        topToBottom: {
          '0%': { transform: 'translateY(-20%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      }
    }
  },
  plugins: [
    require('@headlessui/react'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
