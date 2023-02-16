/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'music':'url("./assets/nomusic.jpg")',
        'stairs':'url("./assets/stairs.jpg")',
        'develop':'url("./assets/develop.jpg")',
      }
    },
  },
  variant: {
    // textcolor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  darkMode: 'class'
}
