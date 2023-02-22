/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {},
      maxWidth: {
        '8.75': '8.75rem'
      }
    },
  },
  plugins: [],
};
