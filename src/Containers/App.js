import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import ColorPanel from "../Components/ColorPanel";
import SidePanel from "../Components/SidePanel";
import Messages from "../Components/Messages";
import MetaPanel from "../Components/MetaPanel";
import "../Assets/App.css";

const App = ({ currentUser }) => {
    return (
        <Grid columns="equal" className="app">
            <ColorPanel />
            <SidePanel currentUser={currentUser} />
            <Grid.Column style={{ marginLeft: 320 }}>
                <Messages />
            </Grid.Column>
            <Grid.Column width={4}>
                <MetaPanel />
            </Grid.Column>
        </Grid>
    );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(App);
