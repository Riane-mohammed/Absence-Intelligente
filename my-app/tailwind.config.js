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
        content: 'calc(100vw - 280px)',
        nav: '250px',
        login: '500px',
        tdCourse: '175px',
      },
      height: {
        login: '400px',
      },
      margin: {
        nav: '265px',
      },
    },
  },
  plugins: [],
}