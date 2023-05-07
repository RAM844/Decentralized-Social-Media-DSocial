import { useCreateFollowTypedDataMutation } from "@/graphql/generated";
import { useAddress, useSDK } from "@thirdweb-dev/react";
import { signTypedDataWithOmittedTypeName, splitSignature } from "./helpers";
import { LENS_CONTRACT_ABI, LENS_CONTRACT_ADDRESS } from "@/const/contracts";
import { useMutation } from "@tanstack/react-query";


export function useFollow() {

    const {mutateAsync: requestTypedData} = useCreateFollowTypedDataMutation();
    const sdk = useSDK(); 
    const address = useAddress();
    
    async function follow(userId:string) {
        // 1. Use the auto generated mutation called "usecreateFollowTypedData"
        // to get the typed data for the user to sign
        const typedData = await requestTypedData({
            request: {
                follow: [
                    {
                        profile: userId,
                    },
                ],
            },
        });  
        
        if(!sdk) return;
        // 2. Ask the user to sign that typed data
        //Sign the type data using the SDK
        const { domain, types, value, } = typedData.createFollowTypedData.typedData;
        const signature = await signTypedDataWithOmittedTypeName(
            sdk,
            domain,
            types,
            value
        );

        const { v, r, s} = splitSignature(signature.signature);
     
        

        // 3. Send the typed data to the smart contract
        // to perform the  write operation on the blockchain
        const lensHubContract = await sdk.getContractFromAbi(
            LENS_CONTRACT_ADDRESS,
            LENS_CONTRACT_ABI
        );

        
    }

   

}