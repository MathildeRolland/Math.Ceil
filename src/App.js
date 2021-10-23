
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import './App.scss';

// == VIEWS
import Home from './views/Home';

// == COMPONENTS 
import Header from './components/Header';
import Footer from './components/Footer'

// == THEME
const theme = createTheme({
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
    fontFamily: 'Alegreya Sans, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  }
});


// == APPLICATION
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
