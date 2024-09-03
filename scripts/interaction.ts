import { ethers } from "hardhat";

async function main() {
  const web3CXITokenAddress = "0xfc04Cb7392147636162c660c144783763538fe69";
  const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

  const saveERC20ContractAddress = "0x99c9565F3769D40641429967604144a7Ba48AAA4";
  const saveERC20 = await ethers.getContractAt(
    "ISaveERC20",
    saveERC20ContractAddress
  );

  // Approve savings contract to spend token
  const approvalAmount = ethers.parseUnits("1000", 18);

  const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
  approveTx.wait();

  const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
  console.log("Contract balance before :::", contractBalanceBeforeDeposit);

  const depositAmount = ethers.parseUnits("400", 18);
  const depositTx = await saveERC20.deposit(depositAmount);

  console.log(depositTx);

  depositTx.wait();

  const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

  console.log("Contract balance after :::", contractBalanceAfterDeposit);

  // Withdrawal Interaction
  const contractBalanceBeforeWithdrawal = await saveERC20.getContractBalance();
  const userBalanceBeforeWithdrawal = await saveERC20.myBalance();
  const withdrawalAmount = ethers.parseUnits("200", 18);
  const withdrawalTx = await saveERC20.withdraw(withdrawalAmount);
  console.log(withdrawalTx);
  withdrawalTx.wait();
  const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance();
  const userBalanceAfterWithdrawal = await saveERC20.myBalance();

  console.log(
    "Contract Balance before Withdrawal",
    contractBalanceBeforeWithdrawal
  );
  console.log(
    "Contract balance after withdrawal :::",
    contractBalanceAfterWithdrawal
  );
  console.log(
    "User balance inside contract before Withdrawal",
    userBalanceBeforeWithdrawal
  );
  console.log(
    "User balance inside contract after withdrawal :::",
    userBalanceAfterWithdrawal
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
