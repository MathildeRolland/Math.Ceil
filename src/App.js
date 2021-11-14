import { ThemeProvider } from '@mui/material/styles';

// == ROUTER
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from 'react-router-dom';

// == THEME
import theme from './styles/theme';

// == STYLES 
import './styles/App.scss';

// == VIEWS
import Home from './views/Home';
import Article from './views/Article';
import ArticlesPage from './views/ArticlesPage';

// == COMPONENTS 
import Header from './containers/Header';
import Footer from './components/Footer'

// == REDUX
import { store } from './redux/store';
import { Provider } from 'react-redux';


// == APPLICATION
function App() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/articles" element={<ArticlesPage />} exact />
              <Route path="/articles/article" element={<Article />} />
            </Routes>
            <Footer />
          </div>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
