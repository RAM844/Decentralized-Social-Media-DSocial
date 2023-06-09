import { useAddress, useSDK } from "@thirdweb-dev/react";
import generateChallenge from "./generateChallenge";
import { useAuthenticateMutation } from "@/graphql/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setAccessToken } from "../../lib/auth/helpers"
// 0. use has a connected wallet 

export default function useLogin() {
    const address = useAddress();
    const sdk = useSDK();
    const { mutateAsync: sendSignedMessage } = useAuthenticateMutation();
    const client = useQueryClient();

    // 1.write the actual async function 
    async function login() {
        if (!address) return;
        // 1.generate a challenge which comes from lens api
        const { challenge } = await generateChallenge(address);

        // 2. Sign the challenge from the user's wallet
        const signature = await sdk?.wallet.sign(challenge.text);

        // 3. send the signed challenge to the lens api
        const { authenticate } = await sendSignedMessage({
            request: {
                address: address,
                signature: signature,
            }
        })
        console.log("Authencated", authenticate);

        // 4. receive a access token from the Lens api if we succed 
        // 5. Store the access token inside local storage so we can use it

        const { accessToken, refreshToken } = authenticate;

        setAccessToken(accessToken, refreshToken);

        // Now, let's ask react query to refetch the cache key
        // Refetch this cache key : ["lens-user",address]
        client.invalidateQueries(["lens-user", address]);
    }

    //2.return useMutation hook from wrapping the asynch function 
    return useMutation(login);
}

