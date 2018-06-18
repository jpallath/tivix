import {
    LOAD_POSTS,
    ADD_POST,
    ADD_MAX_TITLE_POST,
    ADD_MAX_BODY_POST,
    ADD_MIN_TITLE_POST,
    ADD_MIN_BODY_POST
} from "../actionTypes";

const initialState = {
    posts: [],
    minBody: {},
    minTitle: {},
    maxBody: {},
    maxTitle: {}
};

export default function rootReducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...newState,
                posts: action.posts,
                minBody: action.minBody,
                minTitle: action.minTitle,
                maxBody: action.maxBody,
                maxTitle: action.maxTitle
            };
        case ADD_POST:
            let newPost = { ...action.post, id: newState.posts.length + 100 };
            return {
                ...newState,
                posts: [...newState.posts, newPost]
            };
        case ADD_MIN_BODY_POST:
            newPost = { ...action.post, id: newState.posts.length + 100 };
            return {
                ...newState,
                posts: [...newState.posts, newPost],
                minBody: action.min
            };
        case ADD_MAX_BODY_POST:
            newPost = { ...action.post, id: newState.posts.length + 100 };
            return {
                ...newState,
                posts: [...newState.posts, newPost],
                maxBody: action.max
            };
        case ADD_MIN_TITLE_POST:
            newPost = { ...action.post, id: newState.posts.length + 100 };
            return {
                ...newState,
                posts: [...newState.posts, newPost],
                minTitle: action.min
            };
        case ADD_MAX_TITLE_POST:
            newPost = { ...action.post, id: newState.posts.length + 100 };
            return {
                ...newState,
                posts: [...newState.posts, newPost],
                maxTitle: action.max
            };
        default:
            return state;
    }
}
