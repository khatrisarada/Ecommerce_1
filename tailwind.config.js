/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4763eb",
        secondary: "#63e3be",
      },
    },
  },
  darkMode: "class", // Enables dark mode using the "dark" class
  plugins: [],
};
