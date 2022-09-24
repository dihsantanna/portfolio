/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    colors: {
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
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('@headlessui/react')],
};
