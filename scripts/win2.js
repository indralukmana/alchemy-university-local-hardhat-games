// import the Hardhat Runtime Environment
import hre from "hardhat";

// add the game address here and update the contract name if necessary
const gameAddr = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
const contractName = "Game2";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:

  let tx = await game.setX(25);
  await tx.wait();

  tx = await game.setY(25);
  await tx.wait();

  tx = await game.win();
  await tx.wait();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
