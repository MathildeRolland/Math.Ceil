import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 768,
			desktop: 992,
			lgDesktop: 1200,
		},
	},
	palette: {
		mode: 'dark',
		primary: {
			light: '#E835E0',
			main: '#9303D7',
		},
		secondary: {
			main: '#4A3CE9',
		},
		text: {
			light: '#EEEEEE',
			black: '#060606',
		},
		background: {
			medium: '#272727',
			dark: '#1C1C1C',
		},
	},
	typography: {
		fontFamily: 'Alegreya Sans, sans-serif',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightBold: 700,
		h1: {
			fontSize: '3rem',
		},
		h2: {
			fontSize: '2.5rem',
		},
		h3: {
			fontSize: '2rem',
		},
		body2: {
			fontSize: '1.4rem',
		},
	},
});

export default theme;
