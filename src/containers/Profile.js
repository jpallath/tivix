import React, { Component } from "react";
import TodoList from "./TodoList";
import PostsList from "./PostsList";

import { ProfileBox, StyledLink } from "../styledComponents/styles";

class Profile extends Component {
    render() {
        return (
            <ProfileBox>
                <TodoList />
                <PostsList />
                <StyledLink to="/">Home</StyledLink>
            </ProfileBox>
        );
    }
}

export default Profile;
