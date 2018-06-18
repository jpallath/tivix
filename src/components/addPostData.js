import React, { Component } from "react";
import { Form } from "../styledComponents/styles";

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
            <Form onSubmit={this.handleNewData}>
                <div>
                    <label htmlFor="post_title">New Post:</label>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleTitleChange.bind(this)}
                    />
                </div>
                <div>
                    <label htmlFor="post_body"> </label>
                    Description
                    <textarea
                        type="text"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleBodyChange.bind(this)}
                    />
                </div>
                <input type="submit" value="Submit" />
            </Form>
        );
    }
}

export default AddPostData;
