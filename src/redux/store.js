import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/index';
import articlesMiddleware from './middlewares/fetchArticles';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(articlesMiddleware));

export const store = createStore(rootReducer, enhancers);
