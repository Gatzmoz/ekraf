/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./*.html'],
	theme: {
		extend: {
			colors: {
				'gasendra-blue-primary': '#289fc3',
				'gasendra-blue-secondary': '#9fc8b7',
				primary: '#edbc48',
			},
		},
	},
	plugins: [],
};
