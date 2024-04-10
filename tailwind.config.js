/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        topColor: "#FFD3C3",
        midColor: "#EFB09C",
        bottomColor: "#BD4F5D",
        headerColor: "#550000",
        subheaderColor: "#8F4F40",
      }
    },
  },
  plugins: [],
}

