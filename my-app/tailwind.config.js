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
        card: '250px',
        chart: '60%',
      },
      height: {
        login: '400px',
        card: '150px',
      },
      margin: {
        nav: '265px',
      },
      boxShadow: {
        tab: '0 7px 25px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        tab: '20px',
      },
    },
  },
  plugins: [],
}