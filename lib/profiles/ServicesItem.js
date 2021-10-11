import { DocumentIcon, Heading, Pane, Text } from "evergreen-ui";
import React from "react";
import { Segment, Button } from "..";
import useSwr from "swr";
// import axios from "axios";

const ServicesItem = ({ service }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:1337/services/${service.id}`);
      const d = await res.json();
      setData(d);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Segment justifyContent="space-between" marginBottom={24}>
      <Pane>
        <Pane>
          <Heading>{data && data.title}</Heading>
        </Pane>
        <Pane>
          <Text>{data && data.description}</Text>
        </Pane>
        <Pane marginTop={16}>
          <Heading>Portfolio</Heading>
        </Pane>
        <Pane flexDirection="row" display="flex">
          {data &&
            data.portfolios.map((port) => {
              return (
                <Pane
                  key={port.id}
                  border="muted"
                  borderRadius={10}
                  paddingX={8}
                  paddingY={8}
                  marginRight={16}
                  marginTop={8}
                >
                  <a href={port.url} target="_blank">
                    <DocumentIcon size={40} />
                  </a>
                </Pane>
              );
            })}
        </Pane>
      </Pane>
      <Pane display="flex" flexDirection="row" alignItems="center">
        <Pane>
          <Heading>${data && data.price}</Heading>
        </Pane>
        <Pane marginLeft={24}>
          <Button>Quote</Button>
        </Pane>
      </Pane>
    </Segment>
  );
};

export default ServicesItem;
