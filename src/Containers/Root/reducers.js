import * as actionTypes from "./constants";

const initialState = {
    currentUser: "",
    isLoading: true
};

export const user_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                currentUser: action.payload.currentUser,
                isLoading: false
            };
        case actionTypes.CLEAR_USER:
            return {
                ...initialState,
                isLoading: false
            };
        default:
            return state;
    }
};
