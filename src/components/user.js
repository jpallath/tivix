import React, { Component } from "react";

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
            <li onClick={() => this.changeCurrentUser(id)}>
                {id}: {name}
            </li>
        );
    }
}

export default User;
