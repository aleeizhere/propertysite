/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightGreen: '#41CE8E',
        white:'#FFFFFF',
        creamWhite:'#F6F7F9',
        darkBlue:'#121C30',
      },
      backgroundImage:{
        'hero-image':'url("./assets/onboarding-dark.jpg")'
      },
    },
  },
  plugins: [],
}
