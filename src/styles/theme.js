import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 768,
        desktop: 992,
        lgDesktop: 1200
      }
    },
    palette: {
      mode: "dark",
      primary: {
        light: '#E835E0',
        main: '#9303D7',
      },
      secondary: {
        main: '#4A3CE9'
      },
      text: {
        secondary: '#EEEEEE',
        black: '#060606'
      },
      background: {
        medium: '#272727',
      }
    },
    typography: {
      htmlFontSize: 9,
      fontFamily: 'Alegreya Sans, sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightBold: 700,
      h1: {
        fontSize: '3rem',
      }
    },
});

export default theme;