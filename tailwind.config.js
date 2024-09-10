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
        'cardBg': '#6F7A4B',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dela: ['Dela Gothic One', 'cursive'],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
