import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";
import Channel from "./Channel";
import DirectMessages from "./DirectMessages";

class SidePanel extends Component {
    render() {
        const { currentUser } = this.props;
        return (
            <Menu
                size="large"
                inverted
                fixed="left"
                vertical
                style={{ background: "#4c3c4c", fontSize: "1.2em" }}
            >
                <UserPanel currentUser={currentUser} />
                <Channel currentUser={currentUser} />
                <DirectMessages />
            </Menu>
        );
    }
}

export default SidePanel;
