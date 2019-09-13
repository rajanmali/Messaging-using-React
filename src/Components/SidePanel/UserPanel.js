import React, { Component } from "react";
import { Grid, Header, Icon, Dropdown } from "semantic-ui-react";

class UserPanel extends Component {
    dropdownOptions = () => [
        {
            key: "user",
            text: (
                <span>
                    Signed in as <strong>User</strong>
                </span>
            ),
            disabled: true
        },
        {
            key: "avatar",
            text: <span>Change Avatar</span>
        },
        {
            key: "logout",
            text: <span>Log out</span>
        }
    ];

    render() {
        return (
            <Grid style={{ background: "#4c3c4c" }}>
                <Grid.Column>
                    <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
                        {/* App Header */}
                        <Header inverted floated="left" as="h2">
                            <Icon name="mail outline" />
                            <Header.Content>Messages</Header.Content>
                        </Header>
                    </Grid.Row>
                    {/* User Dropdown */}
                    <Header style={{ padding: "0.25em" }} inverted as="h4">
                        <Dropdown
                            trigger={<span>User</span>}
                            options={this.dropdownOptions()}
                        ></Dropdown>
                    </Header>
                </Grid.Column>
            </Grid>
        );
    }
}

export default UserPanel;
