
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { EIP712Domain } from "@thirdweb-dev/sdk/dist/declarations/src/evm/common/sign";
import { ethers } from "ethers";
import omitDeep from "omit-deep";


// 1. Sign typed data with omitted __typename values using typedeep
export function omitTypeName(object: any){
    return omitDeep(object, ["__typename"]);
}

export async function signTypedDataWithOmittedTypeName(
    sdk: ThirdwebSDK,
    domain: EIP712Domain,
    types: Record<string, any>,
    value: Record<string, any>
){
    //Perform signing using the SDK
    return await sdk.wallet.signTypedData(
        omitTypeName(domain) as EIP712Domain,
        omitTypeName(types) as Record<string, any>,
        omitTypeName(value) as Record<string, any>
    );
}

// 2. Split the signatures to extract the "v", "r", "s" values
export function splitSignature(signature: string){
    return ethers.utils.splitSignature(signature);
}