import {
    LOAD_TODOS,
    ADD_TODO,
    ADD_MAX_TODO,
    ADD_MIN_TODO
} from "../actionTypes";

const initialState = {
    todos: [],
    minTitle: {},
    maxTitle: {}
};

export default function rootReducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_TODOS:
            return {
                ...newState,
                todos: action.todos,
                minTitle: action.minTitle,
                maxTitle: action.maxTitle
            };
        case ADD_TODO:
            let newTodo = { ...action.todo, id: newState.todos.length + 1 };
            return {
                ...newState,
                todos: [...newState.todos, newTodo]
            };
        case ADD_MIN_TODO:
            newTodo = { ...action.todo, id: newState.todos.length + 1 };
            return {
                ...newState,
                todos: [...newState.todos, newTodo],
                minTitle: action.min
            };
        case ADD_MAX_TODO:
            newTodo = { ...action.todo, id: newState.todos.length + 1 };
            return {
                ...newState,
                todos: [...newState.todos, newTodo],
                maxTitle: action.max
            };
        default:
            return state;
    }
}
