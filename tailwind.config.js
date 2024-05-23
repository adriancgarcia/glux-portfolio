/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontfamily: {
      primary: 'Playfair Dis[;ay',
      secondary: 'Mullish',
    },
    screens: {
      sm: '640px',
      md:'768',
      lg:'1024',
      xl:'1192',
    },
    extend: {
      colors: {
        primary: '#0E111d',
        grey:'#484B4B',

        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
};

