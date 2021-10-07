import React from "react";
const profile = ({ profile }) => {
  console.log(profile);
  return <div>PRofile</div>;
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    // `http://localhost:1337/profiles/${context.params.id}`
    process.env.API_HOST
  );

  const profile = await res.json();

  return {
    props: {
      profile,
    },
  };
};

export default profile;
