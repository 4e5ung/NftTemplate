const { ethers } = require("hardhat");

const overrides = {
    gasLimit: 9999999
}

// Lockup Deploy
async function main() {
    accounts = await ethers.getSigners();

    nftTemplateContract = await (await ethers.getContractFactory("NftTemplate")).deploy(overrides);

    console.log(nftTemplateContract.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
