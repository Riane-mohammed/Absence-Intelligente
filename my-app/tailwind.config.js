/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ryan: '#9333ea',
        med: '#4c0519',
      },
      width: {
        nav: '250px',
        content: 'calc(100vw - 270px)',
      }
    },
  },
  plugins: [],
}