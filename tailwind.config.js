/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['variable(--font-inter)'],
        ubu: ['variable(--font-ubu)']
      }
    },
  },
  plugins: [],
}

