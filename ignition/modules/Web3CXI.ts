const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Web3CXI", (m: any) => {
  const web3cxi = m.contract("Web3CXI");

  return { web3cxi };
});
