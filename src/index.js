import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";

import configureStore from "./Redux/store";
import Root from "./Containers/Root";

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
            <Root />
        </Router>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
