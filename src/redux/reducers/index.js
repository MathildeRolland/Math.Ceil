import { combineReducers } from "redux";
import { utils } from './utils';
import { articles } from './articles';

export const rootReducer = combineReducers({
    utils,
    articles
});