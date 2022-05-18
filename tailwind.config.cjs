module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		aspectRatio: false
	},
	theme: {
		screens: {
			xxs: '320px',
			xs: '480px',
			sm: '640px',
			md: '768px',
			xmd: '880px',
			lg: '1024px',
			main: '1170px', // 1170px is area main size
			sxl: '1200px',
			xl: '1280px',
			mxl: '1400px',
			'2xl': '1536px' // can i change to 1440px follow design system?
		},
		extend: {
			colors: {
				// primary
				'primary-5': '#F2F4F6',
				'primary-10': '#E4E9EC',
				'primary-20': '#CBD5DC',
				'primary-40': '#98ACB9',
				'primary-60': '#668397',
				'primary-80': '#335A75',
				'primary-100': '#013253',
				// primary CTA
				'primary-cta-5': '#FFFAF5',
				'primary-cta-10': '#FEF4EA',
				'primary-cta-20': '#FDEBD7',
				'primary-cta-40': '#FCD8B0',
				'primary-cta-60': '#FBC58A',
				'primary-cta-80': '#FAB263',
				'primary-cta-100': '#F99F3D',
				// newtrals
				'gray-lighter': '#F4F4F4',
				'gray-light': '#D3D6D7',
				'gray-base': '#A9AEB1',
				'gray-dark': '#7E868A',
				'gray-darker': '#545E64',
				'gray-darkest': '#2A363E',
				// secondary
				'secondary-5': '#F2F4F6',
				'secondary-10': '#E4E9EC',
				'secondary-20': '#CBD5DC',
				'secondary-40': '#98ACB9',
				'secondary-60': '#668397',
				'secondary-80': '#335A75',
				'secondary-100': '#45bfcb',
				// secondary accents
				'secondary-a-5': '#FFF7F4',
				'secondary-a-10': '#FFEFE9',
				'secondary-a-20': '#FFE0D5',
				'secondary-a-40': '#FEC1AB',
				'secondary-a-60': '#FDA281',
				'secondary-a-80': '#FC8357',
				'secondary-a-100': '#fc642d',
				// Alerts
				'success-5': '#F4FDF9',
				'success-10': '#EAFBF3',
				'success-20': '#D6F6E7',
				'success-40': '#ADEDCF',
				'success-60': '#84E3B7',
				'success-80': '#5BDA9F',
				'success-100': '#33D188',
				// warning
				'warning-5': '#F9F7F2',
				'warning-10': '#F3EEE6',
				'warning-20': '#E8DECF',
				'warning-40': '#D2BE9F',
				'warning-60': '#BB9D6F',
				'warning-80': '#A47D3F',
				'warning-100': '#8E5D0F',
				// error
				'error-5': '#FDF5F5',
				'error-10': '#F9EAEA',
				'error-20': '#F4D6D6',
				'error-40': '#EAAEAE',
				'error-60': '#DF8787',
				'error-80': '#D55F5F',
				'error-100': '#CD3838',
				// black & white
				black: '#000000',
				white: '#FFFFFF',
				transparent: 'transparent'
			},
			fontFamily: {
				roboto: ['Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/aspect-ratio')]
};
