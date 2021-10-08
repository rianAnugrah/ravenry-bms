import React from "react";
import { Layout } from "../../../lib";
import AboutMe from "./AboutMe";
import ServicesList from "./ServicesList";
import Testimony from "./Testimony";
const profileDetail = ({ profile }) => {
  console.log(profile);
  console.log("node js only", process.env.API_HOST);

  return (
    <Layout>
      <AboutMe profile={profile} />
      <ServicesList services={profile.services} />
      <Testimony services={profile.services} />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.API_HOST}/profiles/${context.params.id}`
  );

  const profile = await res.json();

  return {
    props: {
      profile,
    },
  };
};

export default profileDetail;
