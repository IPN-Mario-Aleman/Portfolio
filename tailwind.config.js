module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': {'min': '769px'},
        'msm': {'max': '640px'},
      }
    },
  },
  plugins: [],
}
