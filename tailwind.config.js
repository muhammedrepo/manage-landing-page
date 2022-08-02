/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Be Vietnam Pro", "sans-serif"],
      body: ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {
      colors: {
        "main-red": "hsl(12, 88%, 59%)",
        "main-blue": "hsl(228, 39%, 23%)",
        "grayish-blue": "hsl(227, 12%, 61%)",
        "dark-blue": "hsl(233, 12%, 13%)",
        "pale-red": "hsl(13, 100%, 96%)",
        "light-gray": "hsl(0, 0%, 100%)",
        "dark-gray": "hsl(227, 12%, 97%)",
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(rgb(0 0 0 / 0), rgb(0 0 0 / 0.8))",
      },
    },
  },
  plugins: [],
};
