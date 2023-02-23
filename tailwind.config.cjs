/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInDown: "fadeIn ease-in 1.4s",
        slideInLeft: "slide forwards 1.4s",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0, transform: "translate3d(0, -10%, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
        slide: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(0)" },
        },
      }),
      colors: {
        main: "#00FC87",
        transparentBlack: "rgba(0,0,0,.85)",
      },
      fontSize: {
        "4.5xl": [
          "2.5rem",
          {
            lineHeight: 1.1,
          },
        ],
      },
      maxWidth: {
        8.75: "8.75rem",
      },
    },
  },
  plugins: [],
};
