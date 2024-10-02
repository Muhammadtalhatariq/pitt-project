/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#FEFCFB",
        secondary: "#F7F8FC",
        primaryRed: "#EC1D23",
        primaryBlack: "#222222",
        secondaryBlue: "#4086F4",
        secondaryYellow: "#FFB60A",
        textblack: "#222222",
        textgray: "444444",
        textLight: "#666666",
        primarybtn: "#EC1D23"
      },
    },
  },
  plugins: [],
};
