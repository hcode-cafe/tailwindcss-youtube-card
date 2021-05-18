module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hcode-cafe": "url(./images/bg-hcode-cafe.webp)",
        "hcode-lab": "url(./images/bg-hcodelab.webp)"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
