/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F85F6A",
        gray: "#EEF0F2",
        "dark-text": "#C0DBF4",
      },
    },
  },
  plugins: [],
};
