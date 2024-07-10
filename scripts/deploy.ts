import hre from "hardhat";

interface Arguments {
  game?: string;
}

// Initialize an empty object to hold our arguments
let args: Arguments = {};

// Parse the command line arguments
for (let i = 2; i < process.argv.length; i++) {
  let arg = process.argv[i];
  if (arg.startsWith("--game")) {
    // Check if the argument starts with '--game'
    args.game = process.argv[i + 1] as string;
  }
}

// Use the parsed arguments
const contractName = args.game || "Game1"; // Default to "Game1" if --game is not provided

async function main() {
  const Game = await hre.ethers.getContractFactory(contractName);
  // if you need to add constructor arguments for the particular game, add them here:
  const game = await Game.deploy();
  console.log(`${contractName} deployed to address: ${game.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
