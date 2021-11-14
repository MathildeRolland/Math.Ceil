import { LOAD_ALL_ARTICLES } from '../actionTypes';

export const loadAllArticles = (articles) => ({
    type: LOAD_ALL_ARTICLES,
    payload: {
        articles
    }
})