import React, { Component } from "react";
import TodoList from "./TodoList";
import PostsList from "./PostsList";

class Profile extends Component {
    render() {
        return (
            <div>
                <TodoList />
                <PostsList />
            </div>
        );
    }
}

export default Profile;
