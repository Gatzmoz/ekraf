/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./*.html', './**/*.html'],
	theme: {
		extend: {
			colors: {
				'gasendra-blue-primary': '#289fc3',
				'gasendra-blue-secondary': '#9fc8b7',
				primary: '#edbc48',
				'cms-gray': '#454D55',
				'cms-red': '#e34b3c',
				'cms-light-gray': '#d9d9d9',
				'cms-dark-gray': '#343a40',
				'cms-darker-gray': '#2F3439',
				'cms-text-gray': '#6C757D',
				'cms-blue': '#3f6791',
			},
		},
	},
	plugins: [],
};
