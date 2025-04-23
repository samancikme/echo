/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'dark-bg': '#14161b',
        },
        fontFamily: {
          display: ['"display-bold"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  