import { combineReducers } from "redux";
import users from "./users";
import todos from "./todos";
import posts from "./posts";

const rootReducer = combineReducers({
    users,
    todos,
    posts
});

export default rootReducer;
