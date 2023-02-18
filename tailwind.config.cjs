/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'music':'url("./assets/nomusic.webp")',
        'stairs':'url("./assets/stairs.webp")',
        'develop':'url("./assets/develop.webp")',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
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
