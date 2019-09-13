import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";

import App from "./Components/App";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
