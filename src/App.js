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

// == REDUX
import { store } from './redux/store';
import { Provider } from 'react-redux';


// == APPLICATION
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Home />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
