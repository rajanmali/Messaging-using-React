import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import firebase from "firebase";

import App from "./Components/App";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

class Root extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push("/");
            }
        });
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        );
    }
}

const RootWithAuth = withRouter(Root);

ReactDOM.render(
    <Router>
        <RootWithAuth />
    </Router>,
    document.getElementById("root")
);
registerServiceWorker();
