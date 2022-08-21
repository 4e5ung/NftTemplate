const { expect, assert } = require("chai");
const { ethers, waffle } = require("hardhat");
const { Bignumber } = require("ethers");




describe("nftTemplate", function () {

    let accounts;
    let nftTemplateContract;
    const MaxUint256 = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

    const overrides = {
        gasLimit: 9999999
    }


    beforeEach(async function () { 
        accounts = await ethers.getSigners();
        nftTemplateContract = await (await ethers.getContractFactory("NftTemplate")).deploy(overrides);

        const uri = ['ipfs://bafyreidsikhy774dzemteoujj7htnfntkbzuohhmttdzyxvipr7pzw7iie/metadata.json'
        ,'ipfs://bafyreiewtuaazxsyagdh2cwwfoapszifbci66bpd3jxqxgtjnoi67odcx4/metadata.json'
        ,'ipfs://bafyreihuycvwgcdqsjkbiyhjhhtqbsfr7xiwmbz7ki7gbeeu3ve7w3bq6i/metadata.json'
        ,'ipfs://bafyreihdqlcbto7xjockqlajlgzt72kkvqiegpvedkcfczfoshcalpwzie/metadata.json'
        ,'ipfs://bafyreibgbocra6fz67ux4cmrb27zu7m3bupckhuqhgmejx5qkgl25ojstu/metadata.json'
        ,'ipfs://bafyreiabh6blurhwt2s457l2ix7ju5gaes4pmcvv73sefzxyiavyfx3tvq/metadata.json'
        ,'ipfs://bafyreic4ut3srslm7mkxdbv4e5icp4wf3up4nxbroubneqzmlddmco5uoe/metadata.json'
        ,'ipfs://bafyreichaqkyj7iygbnqmt6rcords4jsnk4hgamvzdacfodcr7es5g3z4e/metadata.json'
        ,'ipfs://bafyreicpgngsnf567mzuxcwj5eqa7vwmururqmqb4by45ofxj45dvuhtaq/metadata.json'
        ,'ipfs://bafyreiftjvxkpxf4o44gafbrgctxce7owwmyfgyzwjdyt7czgucgd46ywe/metadata.json'];

        const abiCoder = ethers.utils.defaultAbiCoder;
        const encodeUri = abiCoder.encode(["string[]"], [uri]);

        tx = await nftTemplateContract.preNMint(uri.length, encodeUri);
        tx.wait();
    });

    it("transferFrom, 임의 전송", async function() {
        await nftTemplateContract.transferFrom(accounts[0].address, accounts[1].address, 0);
    });

    it("tokensURI, 소유하고있는 전체 리스트", async function() {
        tokensURI = await nftTemplateContract.connect(accounts[0]).tokensURI();
        console.log("tokensURI: "+ tokensURI);  
    });
});
