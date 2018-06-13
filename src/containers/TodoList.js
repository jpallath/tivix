import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, addTodo } from "../store/actions/todo";
import AddData from "../components/addData";
import Todo from "../components/todo";
import { TodoListBox, ButtonContainer } from "../styledComponents/styles";

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
        } else if (eventTitle === "reset") {
            filteredComponent = todos;
        }
        this.setState({ filteredComponent });
    };
    render() {
        let { todos } = this.props;
        let { filteredComponent } = this.state;
        let list = [];
        filteredComponent
            ? (list = filteredComponent.map(todo => {
                  return <Todo key={todo.id} {...todo} />;
              }))
            : (list = todos.map(todo => <Todo {...todo} key={todo.id} />));
        return (
            <TodoListBox>
                <h1>Todos</h1>
                {list}
                <AddData flow={this.addTodo.bind(this)} />
                <ButtonContainer>
                    <button onClick={() => this.showComponent("min title")}>
                        Shortest Todo
                    </button>
                    <button onClick={() => this.showComponent("max title")}>
                        Longest Todo
                    </button>
                    <button onClick={() => this.showComponent("reset")}>
                        Reset
                    </button>
                </ButtonContainer>
            </TodoListBox>
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
