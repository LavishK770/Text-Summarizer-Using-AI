/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'sea-green': '#00ffcc', // Define your sea green color code
        'sky-blue': '#87ceeb',  // Define your sky blue color code
      },
      borderColor: {
        'sea-green': '#00ffcc', // Define your sea green border color code
      },
    },
  },
  plugins: [],
}
