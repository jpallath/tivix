import React, { Component } from "react";
import { PostItem } from "../styledComponents/styles";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.changeCurrentUser = this.changeCurrentUser.bind(this);
    }

    render() {
        let { id, title, body } = this.props;
        return (
            <PostItem key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
            </PostItem>
        );
    }
}

export default Post;
