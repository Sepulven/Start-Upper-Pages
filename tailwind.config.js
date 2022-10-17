/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{pug,html,js}'],
  theme: {
    extend: {},
    colors: {
      'grey': '#2f2d2e',
      'light-grey': '#373f51',
      'bluish-gray': '#242937',
      'black': '#000',
      'white': '#FEF9FF',
      'rose': '#F3E8E3',
      'red': '#FF0000'
    },
    fontFamily: {
      'title' : '"Saira Semi Condensed"',
      'subtitle' : 'Montserrat ',
      'body' : '"Red Hat Display"'
    },
    backgroundImage: {
      'sea-sky': "url('../imgs/sky-sea.jpg')" // Estamos dentro da pagina styles
    }
  },
  plugins: [],
}
