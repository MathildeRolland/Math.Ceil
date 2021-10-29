
import { ThemeProvider } from '@mui/material/styles';

// == THEME
import theme from './styles/theme';

// == STYLES 
import './styles/App.scss';

// == VIEWS
import Home from './views/Home';

// == COMPONENTS 
import Header from './components/Header';
import Footer from './components/Footer'


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
