/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    screens: {
      xs:'390px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1440px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey:'#484B4B',
        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
};

