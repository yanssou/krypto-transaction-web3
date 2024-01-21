const hre = require("hardhat");

const main = async () => {
  const transactions = await hre.ethers.deployContract("Transactions");

  await transactions.deployed();

  console.log("Transactions deployed to: ", transactions.address);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
