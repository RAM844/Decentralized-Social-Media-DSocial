import { useQuery } from "@tanstack/react-query";
import { useAddress } from "@thirdweb-dev/react";
import { readAccessToken } from "./helpers";
import { useDefaultProfileQuery } from "@/graphql/generated";

export default function useLensUser() {
    //1. Make a react query for loacal storage key
    const address = useAddress();

    const loacalStorageQuery = useQuery(
        ["lens-user", address],
        //writing the actual function to check the local storage
        () => readAccessToken()
    );

    //if there is a connected wallet address
    //then we can ask for the default profile from lens
    const profileQuery = useDefaultProfileQuery(
        {
            request: {
                ethereumAddress: address,
            }
        },
        {
            enabled: !!address,
        }
    );

    console.log(profileQuery.data?.defaultProfile);

    return {
        //contains information about both local storage 
        //AND the information about the lens profile
        isSignedInQuery: loacalStorageQuery,
        profileQuery: profileQuery,
    };
}