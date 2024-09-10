/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        system: {
          white: "#fff",
          lightgrey: "#eee",
          grey: "#d9d9d9",
          darkgrey: "#a19a90",
          black: "#000",
          yellow: "#fbfd82"
        }
      }
    },
  },
  plugins: [],
}