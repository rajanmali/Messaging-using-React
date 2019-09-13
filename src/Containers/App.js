import React from "react";
import { Grid } from "semantic-ui-react";
import ColorPanel from "../Components/ColorPanel";
import SidePanel from "../Components/SidePanel";
import Messages from "../Components/Messages";
import MetaPanel from "../Components/MetaPanel";
import "../Assets/App.css";

const App = () => {
    return (
        <Grid columns="equal" className="app">
            <ColorPanel />
            <SidePanel />
            <Grid.Column style={{ marginLeft: 320 }}>
                <Messages />
            </Grid.Column>
            <Grid.Column width={4}>
                <MetaPanel />
            </Grid.Column>
        </Grid>
    );
};

export default App;
