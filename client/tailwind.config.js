/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#209bf0',
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
        '5': '5px',
      }
    },
  },
  plugins: [],
}

