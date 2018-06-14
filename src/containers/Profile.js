import React, { Component } from "react";
import TodoList from "./TodoList";
import PostsList from "./PostsList";

import { ProfileBox, StyledLink } from "../styledComponents/styles";

class Profile extends Component {
    render() {
        let { match } = this.props;
        return (
            <ProfileBox>
                <TodoList {...match} />
                <PostsList {...match} />
                <StyledLink to="/">Home</StyledLink>
            </ProfileBox>
        );
    }
}

export default Profile;
