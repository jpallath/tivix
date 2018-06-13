import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import UserList from "./UserList";
import Profile from "./Profile";

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => <UserList {...props} />}
                        />
                        <Route
                            exact
                            path="/profile"
                            render={props => <Profile {...props} />}
                        />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
