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
      'sea-sky': "url('../imgs/sky-sea.jpg')", // Estamos dentro da pagina styles
      'cloth': "url('../imgs/cloth.jpg')",
      'cow': "url('../imgs/cow.jpeg')"
    },
    dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    }
  },
  plugins: [],
}
