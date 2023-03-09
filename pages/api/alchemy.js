//Alchemy API
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "wLVv1TtN3tHqXJ6NazBivYy_QrxF2cRX",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

export const getNFTAlchemy = async (address, pageKey, pageSize) => {
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner(address, {
    pageKey: pageKey,
    pageSize: pageSize,
  });
  // Print NFTs
  console.log(nfts);
  return nfts;
};
