import React from "react";
const profileDetail = ({ profile }) => {
  console.log(profile);
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
