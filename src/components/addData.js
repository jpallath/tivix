import React, { Component } from "react";
import { Form } from "../styledComponents/styles";

class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.textInput = React.createRef();
        this.handleNewData = this.handleNewData.bind(this);
    }

    handleNewData = e => {
        e.preventDefault();
        this.props.flow(this.state.title);
    };

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    render() {
        return (
            <Form onSubmit={this.handleNewData}>
                <label htmlFor="todo">New Todo:</label>
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)}
                />

                <input type="submit" value="Submit" />
            </Form>
        );
    }
}

export default AddData;
