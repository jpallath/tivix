import React, { Component } from "react";

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
            <form onSubmit={this.handleNewData}>
                <label htmlFor="todo">
                    New Todo:
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange.bind(this)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddData;
