import React from "react";
const profileDetail = ({ profile }) => {
  console.log(profile);
  console.log("node js only", process.env.API_HOST);

  return <div>PRofile</div>;
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
