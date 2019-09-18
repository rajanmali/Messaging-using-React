import React, { Component } from "react";
import { Segment, Accordion, Header, Icon } from "semantic-ui-react";

class MetaPanel extends Component {
    state = {
        activeIndex: 0
    };

    setActiveIndex = (event, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;
        this.setState({ activeIndex: newIndex });
    };

    render() {
        const { activeIndex } = this.state;
        return (
            <Segment>
                <Header as="h3" attached="top">
                    About # Channel
                </Header>
                <Accordion styled attached="true">
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.setActiveIndex}
                    ></Accordion.Title>
                </Accordion>
            </Segment>
        );
    }
}

export default MetaPanel;
