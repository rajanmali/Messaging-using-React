import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import ColorPanel from "../Components/ColorPanel";
import SidePanel from "../Components/SidePanel";
import Messages from "../Components/Messages";
import MetaPanel from "../Components/MetaPanel";
import "../Assets/App.css";

const App = ({ currentUser, currentChannel, isPrivateChannel, userPosts }) => {
    return (
        <Grid columns="equal" className="app">
            <ColorPanel />
            <SidePanel key={currentUser && currentUser.uid} currentUser={currentUser} />
            <Grid.Column style={{ marginLeft: 320 }}>
                <Messages
                    key={currentChannel && currentChannel.id}
                    currentChannel={currentChannel}
                    currentUser={currentUser}
                    isPrivateChannel={isPrivateChannel}
                />
            </Grid.Column>
            <Grid.Column width={4}>
                <MetaPanel
                    key={currentChannel && currentChannel.id}
                    isPrivateChannel={isPrivateChannel}
                    currentChannel={currentChannel}
                    userPosts={userPosts}
                />
            </Grid.Column>
        </Grid>
    );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    currentChannel: state.channel.currentChannel,
    isPrivateChannel: state.channel.isPrivateChannel,
    userPosts: state.channel.userPosts
});

export default connect(mapStateToProps)(App);
