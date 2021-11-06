import { TOGGLE_MENU } from '../actions/actionTypes';


const initialState = {
    isMenuOpen: false
};

export const utils = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }
        default:
            return state;
    }
}