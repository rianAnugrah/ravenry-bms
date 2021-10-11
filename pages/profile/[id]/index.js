import React from "react";
import { Layout } from "../../../lib";
import AboutMe from "../../../lib/profiles/AboutMe";
import ServicesList from "../../../lib/profiles/ServicesList";
import Testimony from "../../../lib/profiles/Testimony";
const profileDetail = ({ profile }) => {
  return (
    <Layout>
      <AboutMe profile={profile ? profile : []} />
      <ServicesList services={profile.services ? profile.services : []} />
      <Testimony services={profile.services ? profile.services : []} />
    </Layout>
  );
};

export const getStaticProps = async (context) => {
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

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_HOST}/profiles/`);

  const profiles = await res.json();

  const ids = profiles.map((profile) => profile.id);

  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default profileDetail;
