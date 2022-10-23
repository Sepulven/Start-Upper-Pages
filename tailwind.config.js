/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./views/**/*.{pug,html,js}'],
	theme: {
		extend: {
			height: {
				'128': '32rem',
				'136': '34rem',
				'144': '36rem',
				'152': '38rem',
				'160': '40rem',
				'168': '42rem'
			},
			width: {
				'128': '32rem',
				'136': '34rem',
				'144': '36rem',
				'152': '38rem',
				'160': '40rem',
				'168': '42rem'
				},
			boxShadow: {
				'inner-sm' : 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'inner' : 'inset 0 1px 3px 0 rgb(0 0 0 / 0.1), inset 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'inner-md' : 'inset 0 4px 6px -1px rgb(0 0 0 / 0.1), inset  0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'inner-lg' : 'inset 0 2px 10px -3px rgb(0 0 0 / 0.1), inset 0 -2px 6px -4px rgb(0 0 0 / 0.1), inset 0 1px 15px -3px rgb(0 0 0 / 0.1)',
				'inner-xl' : 'inset 0 20px 25px -5px rgb(0 0 0 / 0.1), inset 0 8px 10px -6px rgb(0 0 0 / 0.1)',
				'inner-2xl' : '	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)',
				'inner-3xl': 'inset 0 35px 60px -15px rgba(0, 0, 0, 0.3)',
				'3xl' : '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
			}
		},
		colors: {
			'grey': '#2f2d2e',
			'light-grey': '#373f51',
			'bluish-gray': '#242937',
			'black': '#000',
			'white': '#FEF9FF',
			'white-000': '#FFF', 
			'rose': '#F3E8E3',
			'red': '#FF0000',
			'blue' : '#3490dc',
			'green' : '#38c172'
		},
		fontFamily: {
			'title' : '"Saira Semi Condensed"',
			'subtitle' : 'Montserrat ',
			'body' : '"Red Hat Display"'
		},
		backgroundImage: {
			'sea-sky': "url('../imgs/sky-sea.jpg')", // Estamos dentro da pagina styles
			'cloth': "url('../imgs/cloth.jpg')",
			'cow': "url('../imgs/cow.jpeg')",
			'red-close': "url('../imgs/red-close.png')"
		}
	},
	plugins: []
}
