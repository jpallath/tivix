import React, { Component } from "react";

class AddPostData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        };
        this.textInput = React.createRef();
        this.handleNewData = this.handleNewData.bind(this);
    }

    handleNewData = e => {
        e.preventDefault();
        this.props.flow(this.state.title, this.state.body);
    };

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleBodyChange(event) {
        this.setState({ body: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleNewData}>
                <label htmlFor="post_title">
                    New Post Title:
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleTitleChange.bind(this)}
                    />
                </label>
                <label htmlFor="post_body">
                    Description
                    <input
                        type="text"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleBodyChange.bind(this)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddPostData;
