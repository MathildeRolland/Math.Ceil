import axios from 'axios';
import { FETCH_ARTICLES } from '../actions/actionTypes';
import { storeArticles } from '../actions/articles';

export const articlesMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case FETCH_ARTICLES: {
			axios
				.get('http://mathceil-backoffice.test/api/posts')
				.then((response) => {
					console.log('response', response);
					store.dispatch(storeArticles(response.data.posts));
				})
				.catch((error) => {
					console.log('error', error);
				});

			//next(action);
			break;
		}
		default:
			next(action);
	}
};

export default articlesMiddleware;
