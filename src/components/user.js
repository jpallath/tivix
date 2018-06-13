import React, { Component } from "react";
import { BoxItem } from "../styledComponents/styles";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.changeCurrentUser = this.changeCurrentUser.bind(this);
    }

    changeCurrentUser = user => {
        this.props.changeCurrentUser(user);
    };
    render() {
        let { name, id } = this.props;
        return (
            <BoxItem
                className="media"
                onClick={() => this.changeCurrentUser(id)}
            >
                {id}: {name}
            </BoxItem>
        );
    }
}

export default User;
