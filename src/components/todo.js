import React, { Component } from "react";
import { TodoItem } from "../styledComponents/styles";
import { connect } from "react-redux";
import { triggerTodo, removeTodo } from "../store/actions/todo";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.complete = this.complete.bind(this);
    }
    complete = id => {
        this.props.triggerTodo(id);
    };
    remove = id => {
        this.props.removeTodo(id);
    };
    render() {
        let { id, title, completed } = this.props;
        return (
            <TodoItem
                key={id}
                iscompleted={completed ? "completed" : undefined}
                onClick={() => this.complete(id)}
            >
                {title}
                <span>
                    <button>
                        <i className="fa fa-check" aria-hidden="true" />
                    </button>
                    <button onClick={() => this.remove(id)}>
                        <i className="fa fa-times" aria-hidden="true" />
                    </button>
                </span>
            </TodoItem>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos.todos
    };
}

export default connect(mapStateToProps, { triggerTodo, removeTodo })(Todo);
