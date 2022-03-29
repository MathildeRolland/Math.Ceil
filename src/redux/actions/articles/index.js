import { FETCH_ARTICLES, STORE_ARTICLES } from '../actionTypes';

export const fetchArticles = () => ({
	type: FETCH_ARTICLES,
});

export const storeArticles = (payload) => ({
	type: STORE_ARTICLES,
	payload,
});
