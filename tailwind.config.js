/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{pug,html,js}'],
  theme: {
    extend: {},
    colors: {
      'grey': '#2f2d2e',
      'light-grey': '#373f51',
      'black': '#000',
      'white': '#FEF9FF',
      'rose': '#F3E8E3'
    },
    fontFamily: {
      'title' : '"Saira Semi Condensed"',
      'subtitle' : 'Montserrat ',
      'body' : '"Red Hat Display"'
    }
  },
  plugins: [],
}
