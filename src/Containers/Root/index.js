import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import firebase from "firebase";
import { connect } from "react-redux";

import App from "../App";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Spinner from "../../Components/Spinner";
import { setUser, clearUser } from "./actions";

class Root extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.setUser(user);
                this.props.history.push("/");
            } else {
                this.props.history.push("/login");
                this.props.clearUser();
            }
        });
    }

    render() {
        return this.props.isLoading ? (
            <Spinner />
        ) : (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.user.isLoading
});

export default connect(
    mapStateToProps,
    { setUser, clearUser }
)(Root);
