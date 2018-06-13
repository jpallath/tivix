import React, { Component } from "react";
import User from "../components/user";
import { connect } from "react-redux";
import { fetchUsers, changeUser } from "../store/actions/user";
import { Box } from "../styledComponents/styles";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    changeCurrentUser = id => {
        this.props.changeUser(id);
        this.props.history.push("/profile");
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        let { users } = this.props;
        let list = users.map(user => (
            <User
                changeCurrentUser={this.changeCurrentUser.bind(this)}
                key={user.id}
                {...user}
            />
        ));
        return (
            <Box className="box">
                <h1>Users</h1>
                {list}
            </Box>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        currentUser: reduxState.users.currentUser,
        users: reduxState.users.users
    };
}

export default connect(mapStateToProps, { fetchUsers, changeUser })(UserList);
