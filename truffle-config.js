module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      // Match any network id
      network_id: "*",
    },
    develop: {
      port: 8545,
    },
  },
};
