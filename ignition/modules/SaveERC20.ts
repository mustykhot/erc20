import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xf187eD3061Fa14dA12fCa69e04c4C1c0F74842F7";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {
  const save = m.contract("SaveERC20", [tokenAddress]);

  return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0x073E8b716BB5112Aa206F602Ea1577c959ece367
//deployed web3cxi 0xf187eD3061Fa14dA12fCa69e04c4C1c0F74842F7
