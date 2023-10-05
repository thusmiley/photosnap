/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGrey: "#DFDFDF",
      },
    },
    fontFamily: {
      dmSans: ["DM Sans", "sans serif"],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '29px',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
