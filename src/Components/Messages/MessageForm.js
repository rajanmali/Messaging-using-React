import React, { Component } from "react";
import { Segment, Button, Input } from "semantic-ui-react";

class MessageForm extends Component {
    state = {};
    render() {
        return (
            <Segment className="message__form">
                <Input
                    fluid
                    name="message"
                    style={{ marginBottom: "0.7em" }}
                    label={<Button icon={"add"} />}
                    labelPosition="left"
                    placeHolder="Enter message here..."
                />
                <Button.Group icon width="2">
                    <Button color="blue" content="Send" labelPosition="left" icon="edit" />
                    <Button
                        color="teal"
                        content="Upload Media"
                        labelPosition="right"
                        icon={"cloud upload"}
                    />
                </Button.Group>
            </Segment>
        );
    }
}

export default MessageForm;
