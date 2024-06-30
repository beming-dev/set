/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grizzlybear: "#7B6153",
        brownbear: "#594236",
        grizzlybearhv: "#A78B7D",
        whale: "#1B3B64",
        sand: "#efeae7",
        rock: "#e6e1de",
      },
    },
  },
  plugins: [],
};
