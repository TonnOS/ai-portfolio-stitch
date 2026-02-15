/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d7ff2',
        dark: '#101922',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
