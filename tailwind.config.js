/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
      advent: ["Advent Pro", "sans-serif"],
      domaine: ["Domaine Display Narrow", "sans-serif"],
      monte: ["Montserrat", "sans-serif"],
      cormo: ["Cormorant", "serif"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      "extra-bold": "800",
      black: "900",
    },
    extend: {},
  },
  plugins: [],
};
