import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';

// == ROUTER
import { Routes, Route } from 'react-router-dom';

// == THEME
import theme from './styles/theme';

// == STYLES
import './styles/App.scss';

// == VIEWS
import Home from './views/Home';
import Article from './containers/Article';
import ArticlesPage from './views/ArticlesPage';

// == COMPONENTS
import Header from './containers/Header';
import Footer from './components/Footer';

// == APPLICATION
function App({ fetchAllArticles }) {
	// Store all articles in the state
	useEffect(() => {
		fetchAllArticles();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<ThemeProvider theme={theme}>
				<div className='App'>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} exact />
						<Route path='/articles' element={<ArticlesPage />} exact />
						<Route path='/articles/:id' element={<Article />} />
					</Routes>
					<Footer />
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
