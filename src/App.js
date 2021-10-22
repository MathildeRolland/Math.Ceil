
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import './App.scss';

// == VIEWS
import Home from './views/Home';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: '#E835E0',
      main: '#9303D7',
    },
    secondary: {
      main: '#4A3CE9'
    }
  },
  typography: {

  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
