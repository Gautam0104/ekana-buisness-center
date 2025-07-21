/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06447e",
        secondary: "#075985",
      },
      fontFamily: {
        DmSans: ["DM Sans", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Poopins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
