import { Pane, Heading } from "evergreen-ui";
import React from "react";
import TestimonyItem from "./TestimonyItem";

const Testimony = ({ services }) => {
  return (
    <Pane marginBottom={40}>
      <Pane width="100%">
        <Heading size={800}>Testimonial</Heading>
      </Pane>
      <Pane marginTop={24} display="flex" flexDirection="row" width="100%">
        {services.map((service) => {
          return <TestimonyItem key={service.id} service={service} />;
        })}
      </Pane>
    </Pane>
  );
};

export default Testimony;
