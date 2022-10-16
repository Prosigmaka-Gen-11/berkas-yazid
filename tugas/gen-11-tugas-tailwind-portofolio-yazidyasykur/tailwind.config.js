/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'cover-image': "url('../src/assets/image/cover-background.jpg')",
      },
      letterSpacing : {
        'namespacing' : '.25em'
      },
      fontSize : {
        'xs' : ['10px','16px']
      }
    },
  },
  plugins: [],
}