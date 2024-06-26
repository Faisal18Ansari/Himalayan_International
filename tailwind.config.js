/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:["Montserrat", "sans-serif"],
        Satisfy:["Satisfy", "cursive"]
      },
      colors: {
        primary: '#98C0DB', // Example primary color
        secondary: '#499DD6', // Example secondary color
      },
    },
  },
  plugins: [],
}

