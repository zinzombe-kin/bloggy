/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": ["Inter", "sans-serif"],
        "openSans": ["Open Sans", "sans-serif"],
        "Montserrat": ["Montserrat", "sans-serif"],
        "Quicksand": ["Quicksand", "sans-serif"],
      }
    },
  },
  plugins: [],
}

