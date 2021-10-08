import { Pane, Heading } from "evergreen-ui";
import React from "react";
import ServicesItem from "./ServicesItem";

const ServicesList = ({ services }) => {
  return (
    <>
      <Pane width="100%">
        <Heading size={800}>Services</Heading>
      </Pane>
      <Pane marginTop={24}>
        {services.map((service) => {
          return (
            <>
              <ServicesItem service={service} />
              <ServicesItem service={service} />
              <ServicesItem service={service} />
              <ServicesItem service={service} />
            </>
          );
        })}
      </Pane>
    </>
  );
};

export default ServicesList;
