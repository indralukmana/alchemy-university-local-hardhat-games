// import the Hardhat Runtime Environment
import hre from "hardhat";

// add the game address here and update the contract name if necessary
const gameAddr = "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  let tx = await game.giveMeAllowance(20000);
  await tx.wait();

  tx = await game.mint(10000);
  await tx.wait();

  tx = await game.win();

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
