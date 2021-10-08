import { Heading, Pane, Text } from "evergreen-ui";
import React from "react";
import { Segment, Button } from "../../../lib";

const ServicesItem = ({ service }) => {
  console.log("Service", service);
  console.log("Context", service);
  return (
    <Segment justifyContent="space-between" marginBottom={24} >
      <Pane>
        <Pane>
          <Heading>{service.title}</Heading>
        </Pane>
        <Pane>
          <Text>{service.description}</Text>
        </Pane>
      </Pane>
      <Pane display="flex" flexDirection="row" alignItems="center">
        <Pane>
          <Heading>${service.price}</Heading>
        </Pane>
        <Pane marginLeft={24}>
          <Button>Quote</Button>
        </Pane>
      </Pane>
    </Segment>
  );
};

export default ServicesItem;
