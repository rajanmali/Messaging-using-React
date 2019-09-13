import React, { Component } from "react";
import { Menu, Icon, Modal, Form, Button, Input } from "semantic-ui-react";
import firebase from "../../firebase";
import { connect } from "react-redux";
import { setCurrentChannel } from "../../Containers/Root/actions";
class Channel extends Component {
    state = {
        user: this.props.currentUser,
        channels: [],
        channelName: "",
        channelDetails: "",
        channelsRef: firebase.database().ref("channels"),
        firstLoad: true,
        modal: false
    };

    componentDidMount() {
        this.addListeners();
    }

    addListeners = () => {
        let loadedChannels = [];
        this.state.channelsRef.on("child_added", snap => {
            loadedChannels.push(snap.val());
            this.setState({ channels: loadedChannels }, () => this.setFirstChannel());
        });
    };

    setFirstChannel = () => {
        const firstChannel = this.state.channels[0];
        if (this.state.firstLoad && this.state.channels.length > 0) {
            this.props.setCurrentChannel(firstChannel);
        }
        this.setState({ firstLoad: false });
    };

    openModal = () => {
        this.setState({ modal: true });
    };

    closeModal = () => {
        this.setState({ modal: false });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addChannel = () => {
        const { user, channelName, channelDetails, channelsRef } = this.state;
        const key = channelsRef.push().key;

        const newChannel = {
            id: key,
            name: channelName,
            details: channelDetails,
            createdBy: {
                name: user.displayName,
                avatar: user.photoURL
            }
        };
        channelsRef
            .child(key)
            .update(newChannel)
            .then(() => {
                this.setState({
                    channelName: "",
                    channelDetails: ""
                });
                this.closeModal();
            })
            .catch(err => {
                console.error(err);
            });
    };

    displayChannels = channels =>
        channels.length > 0 &&
        channels.map(channel => (
            <Menu.Item
                key={channel.id}
                onClick={() => this.changeChannel(channel)}
                name={channel.name}
                style={{ opcaity: 0.7 }}
            >
                # {channel.name}
            </Menu.Item>
        ));

    changeChannel = channel => {
        this.props.setCurrentChannel(channel);
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.isFormValid(this.state)) {
            this.addChannel();
        }
    };

    isFormValid = ({ channelName, channelDetails }) => channelDetails && channelName;

    render() {
        const { channels, modal } = this.state;
        return (
            <React.Fragment>
                <Menu.Menu style={{ paddingBottem: "2em" }}>
                    <Menu.Item>
                        <span>
                            <Icon name="exchange" /> CHANNELS
                        </span>{" "}
                        ({channels.length}){" "}
                        <Icon name="add" onClick={this.openModal} style={{ cursor: "pointer" }} />
                    </Menu.Item>
                    {this.displayChannels(channels)}
                </Menu.Menu>
                {/* Add channel modal */}
                <Modal basic open={modal} onClose={this.closeModal}>
                    <Modal.Header>Add a Channel</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <Input
                                    fluid
                                    label="Name of Channel"
                                    name="channelName"
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Input
                                    fluid
                                    label="About the Channel..."
                                    name="channelDetails"
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="green" inverted onClick={this.handleSubmit}>
                            <Icon name="checkmark" /> Add
                        </Button>
                        <Button color="red" inverted onClick={this.closeModal}>
                            <Icon name="remove" /> Cancel
                        </Button>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    { setCurrentChannel }
)(Channel);
