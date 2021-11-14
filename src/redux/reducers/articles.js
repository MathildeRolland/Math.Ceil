import { LOAD_ALL_ARTICLES } from '../actions/actionTypes'

const initialState = {
    articles: [],
};

export const articles = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ALL_ARTICLES: {
            return {
                ...state,
                articles: action.payload.articles
            }
        }
        default:
            return state;
    }
}