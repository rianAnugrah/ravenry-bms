import { Avatar, Pane, Strong, Text } from "evergreen-ui";
import React from "react";
import { Segment } from "../../../lib";

const TestimonyItem = () => {
  return (
    <Segment width={300} marginRight={16}>
      <Pane>
        <Avatar
          size={40}
          src="https://storage.googleapis.com/the-racon-production.appspot.com/profile-picture/52a09359-2524-4df9-9a14-f2639128877d-blob"
        ></Avatar>
      </Pane>
      <Pane marginLeft={16}>
        <Strong>She is a good Writer!</Strong>
        <br />
        <Text>Pandu Tyas - Manager</Text>
      </Pane>
    </Segment>
  );
};

export default TestimonyItem;
