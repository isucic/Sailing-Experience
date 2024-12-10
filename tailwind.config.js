/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        dmSans: ["var(--font-dm-sans),", "sans-serif"],
      },
      colors: {
        yellowcustom: "#FEDD2D",
        bluecustom: "#062949",
        lightblue: "#103C63",
        lightgrey: "rgba(6, 41, 73, 0.1)",
        babyblue: "#66B8FF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  safelist: ["bg-lightblue", "bg-bluecustom", "bg-lightgrey"],
});
