/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "card-color": "#41474e",
        "bg-color": "#25282c",
        "font-color": "#797d82",
      },
    },
  },
  plugins: [],
};
