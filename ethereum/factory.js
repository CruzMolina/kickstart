import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x8B49D8dCA7C8F6713eAed15b2af7ee3d0ec1D2e7"
);

export default instance;
