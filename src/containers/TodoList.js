import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos, addTodo } from "../store/actions/todo";
import AddData from "../components/addData";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        this.props.currentUser
            ? this.props.fetchTodos(this.props.currentUser)
            : this.props.fetchTodos(1);
    }

    addTodo(title) {
        let { currentUser } = this.props;
        let newTodo = {
            userId: currentUser,
            title: title,
            completed: false
            // id: todos.length + 1
        };
        this.props.addTodo(newTodo);
    }

    showComponent = eventTitle => {
        let { todos } = this.props;
        let filteredComponent = [];
        if (eventTitle === "min title") {
            let { minTitle } = this.props;
            filteredComponent = todos.filter(todo => {
                return todo.title === minTitle.title;
            });
        } else if (eventTitle === "max title") {
            let { maxTitle } = this.props;
            filteredComponent = todos.filter(todo => {
                return todo.title === maxTitle.title;
            });
        }
        this.setState({ filteredComponent });
    };
    render() {
        let { todos } = this.props;
        let { filteredComponent } = this.state;
        let list = [];
        filteredComponent
            ? (list = filteredComponent.map(todo => {
                  return <li key={todo.id}>{todo.title}</li>;
              }))
            : (list = todos.map(todo => <li key={todo.id}>{todo.title}</li>));
        return (
            <div>
                {list}
                <Link to="/">Home</Link>
                <AddData flow={this.addTodo.bind(this)} />
                <button onClick={() => this.showComponent("min title")}>
                    Shortest Todo
                </button>
                <button onClick={() => this.showComponent("max title")}>
                    Longest Todo
                </button>
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        currentUser: reduxState.users.currentUser,
        todos: reduxState.todos.todos,
        maxTitle: reduxState.todos.maxTitle,
        minTitle: reduxState.todos.minTitle
    };
}

export default connect(mapStateToProps, { fetchTodos, addTodo })(TodoList);
