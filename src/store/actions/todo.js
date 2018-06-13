import {
    LOAD_TODOS,
    ADD_TODO,
    ADD_MAX_TODO,
    ADD_MIN_TODO
} from "../actionTypes";
import { getTodos, postTodo } from "../../services/api";

export const loadTodos = (todos, minTitle, maxTitle) => ({
    type: LOAD_TODOS,
    todos,
    minTitle,
    maxTitle
});

export const sendTodo = todo => ({
    type: ADD_TODO,
    todo
});

// export const fetchTodos = user => {
//     return dispatch => {
//         getTodos(user).then(res => {
//             dispatch(loadTodos(res));
//         });
//     };
// };

export const fetchTodos = user => {
    return dispatch => {
        getTodos(user).then(res => {
            let todos = res.map((todo, index) => {
                return {
                    title: todo.title,
                    titleLength: todo.title.length
                };
            });
            let minTitle = todos.reduce((p, v) => {
                return p.bodyLength < v.bodyLength ? p : v;
            });
            let maxTitle = todos.reduce((p, v) => {
                return p.titleLength > v.titleLength ? p : v;
            });
            dispatch(loadTodos(res, minTitle, maxTitle));
        });
    };
};

export const addTodo = todo => {
    return (dispatch, getState) => {
        let { todos } = getState();
        let { maxTitle, minTitle } = todos;
        let newMin;
        let newMax;
        postTodo(todo).then(res => {
            if (res.title.length < minTitle.titleLength) {
                newMin = { ...todo, titleLength: todo.title.length };
                dispatch(sendMinTitleTodo(todo, newMin));
            } else if (res.title.length > maxTitle.titleLength) {
                newMax = { ...todo, titleLength: todo.title.length };
                dispatch(sendMaxTitleTodo(todo, newMax));
            } else {
                dispatch(sendTodo(todo));
            }
        });
    };
};

export const sendMinTitleTodo = (todo, min) => ({
    type: ADD_MIN_TODO,
    todo: todo,
    min: min
});

export const sendMaxTitleTodo = (todo, max) => ({
    type: ADD_MAX_TODO,
    todo: todo,
    max: max
});
