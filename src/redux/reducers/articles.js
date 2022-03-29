import { STORE_ARTICLES } from '../actions/actionTypes';

const initialState = {
	articles: [],
};

export const articles = (state = initialState, action) => {
	switch (action.type) {
		case STORE_ARTICLES: {
			return {
				...state,
				articles: action.payload,
			};
		}
		default:
			return state;
	}
};
