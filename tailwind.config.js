module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3B8590",
        secondary: "#173054",
        "theme-gray": "#696871",
        "font-dark": "#19191B",
      },
      fontFamily: {
        main: ["Circular Std", "sans-serif"],
        title: ["SF Pro Display", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
