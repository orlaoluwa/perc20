require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x730c4cd1945af21ea12a8eb2cc1232c547e34f33de6633436f52b2ea88bd5c57"],
    },
  },
};
