/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#5F6D36',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    plugins: [],
  }
}