require("dotenv").config();

const { NFTStorage, File } = require("nft.storage");
const fs = require("fs");


const API_KEY = process.env.NFT_API_KEY;

async function storeAsset(index) {

    const client = new NFTStorage({ token: API_KEY })

    sex = index % 2 == 0 ? "Men" : "Women"

    const attributes = [
        {"trait_type":"Sex","value":sex}
    ];        

    const metadata = await client.store({
        name: 'Test '+index,
        description: 'Test Sample Image',
        image: new File(
            [await fs.promises.readFile('assets/'+index+'.png')],
            index+'.png',
            { type: 'image/png' }
        ),
        attributes : attributes
    })

    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}


describe("IPFS-METADATA", function () {    

    it("Create IPFS-METADATA", async function() {
        for( let i = 0; i <1; i++ ){
            await storeAsset(i+1);
        } 
    });
});