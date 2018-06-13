import { CHANGE_USER, LOAD_USERS } from "../actionTypes";

const initialState = {
    currentUser: null,
    users: []
};

export default function rootReducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...newState,
                users: action.users
            };
        case CHANGE_USER:
            return {
                ...newState,
                currentUser: action.userId
            };
        default:
            return state;
    }
}
