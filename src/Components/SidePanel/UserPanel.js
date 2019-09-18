import React, { Component } from "react";
import { Grid, Header, Icon, Dropdown, Image } from "semantic-ui-react";
import firebase from "../../firebase";

class UserPanel extends Component {
    state = {
        user: this.props.currentUser
    };

    dropdownOptions = () => [
        {
            key: "user",
            text: (
                <span>
                    Signed in as <strong>{" " + this.state.user.displayName}</strong>
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
            text: <span onClick={this.handleSignout}>Log out</span>
        }
    ];

    handleSignout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log("Signed Out"));
    };

    render() {
        const { user } = this.state;
        const { primaryColor } = this.props;
        return (
            <Grid style={{ background: primaryColor }}>
                <Grid.Column>
                    <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
                        {/* App Header */}
                        <Header inverted floated="left" as="h2">
                            <Icon name="code" />
                            <Header.Content>Messages</Header.Content>
                        </Header>
                        {/* User Dropdown */}
                        <Header style={{ padding: "0.25em" }} inverted as="h4">
                            <Dropdown
                                trigger={
                                    <span>
                                        <Image
                                            src={user.photoURL}
                                            spaces="right"
                                            avatar
                                            style={{ marginRight: "1em" }}
                                        />
                                        {user.displayName}
                                    </span>
                                }
                                options={this.dropdownOptions()}
                            />
                        </Header>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        );
    }
}

export default UserPanel;
