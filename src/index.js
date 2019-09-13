import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";

import configureStore from "./Redux/store";
import Root from "./Containers/Root";

const RootWithAuth = withRouter(Root);

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
            <RootWithAuth />
        </Router>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
