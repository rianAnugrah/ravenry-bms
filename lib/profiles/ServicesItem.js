import {
  Dialog,
  DocumentIcon,
  Heading,
  Pane,
  Spinner,
  Text,
} from "evergreen-ui";
import React from "react";
import { Segment, Button } from "..";
import getConfig from "next/config";
import QuestionMapper from "./QuestionMapper";
// import axios from "axios";

const ServicesItem = ({ service }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [isShown, setIsShown] = React.useState(false);
  const { publicRuntimeConfig } = getConfig();
  const url = `${publicRuntimeConfig.api_url}/services/${service.id}`;
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const d = await res.json();
      setData(d);
      setIsLoading(false);
    }
    fetchData();
  }, [service.id]);

  const clientSignUpQuestion = [
    {
      key: "firstName",
      label: "First name",
      name: "firstName",
      placeholder: "Please answer",
      required: true,
      subtitle: "this is firstName",
      title: "firstName",
      type: "text",
    },
    {
      key: "lastName",
      label: "Last name",
      name: "lastName",
      placeholder: "Please answer",
      required: true,
      subtitle: "this is lastName",
      title: "lastName",
      type: "text",
    },
    {
      key: "email",
      label: "Email",
      name: "email",
      placeholder: "Please answer",
      required: true,
      subtitle: "this is email",
      title: "email",
      type: "text",
    },
  ];

  return isLoading ? (
    <Spinner />
  ) : (
    <Segment justifyContent="space-between" marginBottom={24}>
      <Pane>
        <Pane>
          <Heading>{data && data.title}</Heading>
        </Pane>
        <Pane>
          <Text>{data && data.description}</Text>
        </Pane>
        <Pane marginTop={16}>
          <Heading>Sample works</Heading>
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
                  <a href={port.url} title={port.title}>
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
          <Button onClick={() => setIsShown(true)}>Quote</Button>
        </Pane>
      </Pane>

      <Dialog
        isShown={isShown}
        title={data && data.title}
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Send Request"
      >
        {data &&
          data.questions.map((quest) => {
            return <QuestionMapper key={quest.id} question={quest} />;
          })}
        {clientSignUpQuestion &&
          clientSignUpQuestion.map((quest) => {
            return <QuestionMapper key={quest.id} question={quest} />;
          })}
      </Dialog>
    </Segment>
  );
};

export default ServicesItem;
