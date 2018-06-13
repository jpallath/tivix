import axios from "axios";

export async function getUsers() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users/");
    let users = res.data;
    return users;
}

export async function getTodos(userId) {
    let res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );
    let todos = res.data;
    return todos;
}

export async function postTodo(todo) {
    let res = await axios.post(
        `https://jsonplaceholder.typicode.com/todos/`,
        todo
    );
    let newTodo = res.data;
    return newTodo;
}

export async function getPosts(userId) {
    let res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    let posts = res.data;
    return posts;
}

export async function postPost(post) {
    let res = await axios.post(
        `https://jsonplaceholder.typicode.com/posts/`,
        post
    );
    let newPost = res.data;
    return newPost;
}
