module.exports = {
  reactStrictMode: true,

  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
    api_url: process.env.API_HOST,
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
    api_url: process.env.API_HOST,
  },
};
