import { getUsers } from "../../services/api";
import { LOAD_USERS, CHANGE_USER } from "../actionTypes";

export const loadUsers = users => ({
    type: LOAD_USERS,
    users
});

export const updateUser = user => ({
    type: CHANGE_USER,
    user
});

export const fetchUsers = () => {
    // loadUsers([{ id: 0, name: "Robin" }, { id: 1, name: "Clint" }]);
    return dispatch => {
        getUsers().then(res => {
            dispatch(loadUsers(res));
        });
    };
};

export const changeUser = userId => {
    return {
        type: CHANGE_USER,
        userId
    };
};
