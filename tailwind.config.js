/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous"],
        saira: ["Saira"],
        inter: ["Inter"],
        rowdies: ["Rowdies"],
      },
      colors: {
        primary: "#04016C",
        secondary: "#0E38CD",
        cartGreen: "#2AAA94",
        gradientFrom: "#083F9B",
        gradientTo: "#7F56D9",
      },
    },
  },
  plugins: [],
};
