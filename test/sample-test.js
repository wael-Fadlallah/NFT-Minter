const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNft", function () {
  it("Should mint and transfer an NFT to someone", async function () {
    const MyNft = await ethers.getContractFactory("RockAndRoll");
    const myNft = await MyNft.deploy();
    await myNft.deployed();

    const recipient = '0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199';
    const metadata = 'cid/test.png';
    let balance = await myNft.balanceOf(recipient);

    expect(balance).to.equal(0);

    const newNft = await myNft.payToMint(recipient,metadata,{value: ethers.utils.parseEther('0.5')});
  
    balance = await myNft.balanceOf(recipient);
    expect(balance).to.equal(1);
    
    expect(await myNft.isContectOwner(metadata)).to.equal(true);
  });
});
