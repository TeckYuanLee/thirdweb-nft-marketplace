import { ChainId } from "@thirdweb-dev/sdk";
import { targetChainId } from "./targetChainConfig";

interface IAddresses {
  [key: string]: { [key: string]: string };
}

/***
 * Add your addresses + networks here.
 * To tell your app where to point to, change the targetChainId
 */
const ADDRESSES: IAddresses = {
  [ChainId.Goerli]: {
    Marketplace: "0x154279cBD80F6316EdB44ADc472732fFBa0C62d9",
  },
};

export const readAppContractAddresses = (name: string) => {
  return ADDRESSES[targetChainId][name];
};
