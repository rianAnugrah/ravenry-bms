import { Avatar, Heading, Pane, Text, Strong } from "evergreen-ui";
import React from "react";
import { Segment, Button, Tag } from "..";
import Sosmed from "./Sosmed";

const AboutMe = ({ profile }) => {
  const {
    avatar,
    firstName,
    lastName,
    aboutMe,
    Expertises,
    title,
    location,
    Languages,
  } = profile;
  const user = profile.users_permissions_user;
  return (
    <Segment
      marginTop={120}
      marginBottom={24}
      alignItems="center"
      flexDirection="column"
    >
      <Pane position="absolute" left="calc(50% - 90px)" top="24px">
        <Avatar src={avatar[0].url} name={profile.firstName} size={180} />
      </Pane>
      <Pane width="100%" height="80px">
        <Sosmed />
      </Pane>
      <Pane display="flex" alignItems="center" flexDirection="column">
        <Heading size={800}>{firstName + " " + lastName}</Heading>
        <Text size={400} marginTop={8}>
          {title}
        </Text>
      </Pane>
      <Pane
        display="flex"
        flexDirection="row"
        marginTop={24}
        justifyContent="space-between"
        width="100%"
      >
        <Pane width="60%" >
          <Pane>
            <Strong size={400}>ABOUT ME</Strong>
          </Pane>
          <Pane>
            <Text size={400}>{aboutMe}</Text>
          </Pane>
          <Pane marginTop={16}>
            <Strong size={400}>EMAIL</Strong>
          </Pane>
          <Pane>
            <a href={`mailto:${user.email}`}>
              <Text size={400}>{user.email}</Text>
            </a>
          </Pane>
          <Pane marginTop={16}>
            <Strong size={400}>EXPERTISES</Strong>
          </Pane>
          <Pane display="flex" flexDirection="row">
            {Expertises.map((ex) => {
              return <Tag key={ex.id}>{ex.name}</Tag>;
            })}
          </Pane>
        </Pane>
        <Pane width="30%">
          <Pane marginTop={16}>
            <Strong size={400}>LOCATION</Strong>
          </Pane>
          <Pane>
            <Text size={400}>{location}</Text>
          </Pane>
          <Pane marginTop={16}>
            <Strong size={400}>LANGUAGE CAPABILITIES</Strong>
          </Pane>
          <Pane>
            {Languages.map((lang) => {
              return (
                <Pane Pane key={lang.id}>
                  <Text size={400}>{lang.name}</Text>
                  <br />
                  <Text size={300} color="muted">
                    {lang.proficiency}
                  </Text>
                </Pane>
              );
            })}
          </Pane>
        </Pane>
      </Pane>
    </Segment>
  );
};

export default AboutMe;
