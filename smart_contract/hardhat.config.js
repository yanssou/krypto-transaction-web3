// https://eth-goerli.g.alchemy.com/v2/dQzhqrWEWLMnarKd8-0KEdrJhqenR8M4

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/dQzhqrWEWLMnarKd8-0KEdrJhqenR8M4",
      accounts: [
        "56b3dacea9b43d96ef59d734678acacf7cc53a3093d628e4a8c22a5a6eb1da05",
      ],
    },
  },
};
