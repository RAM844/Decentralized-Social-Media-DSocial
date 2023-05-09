//What logic we want to run every time we send a request
//to the lens graphql server?

import { isTokenExpired, readAccessToken } from "@/lib/auth/helpers"
import refreshAccessToken from "@/lib/auth/refreshAccessToken";

export const fetcher = <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers']
): (() => Promise<TData>) => {
    async function getAccessToken() {
        //1. check the local storage for acces storage 
        const token = readAccessToken();
        // 2.if there is't a token then return null(not signed in )
        if (!token) return null;
        let accessToken = token?.accessToken;

        // 3.if there is a token , then check its expiration 
        if (isTokenExpired(token.exp)) {
            //4. if it's expired , update using refresh token 
            const newToken = await refreshAccessToken();
            if (!newToken) {
                return null;
            }
            accessToken = newToken;
        }
        // 5.finally, return the token 
        return accessToken

    }

    return async () => {
        const token = typeof window !== "undefined" ? await getAccessToken() : null;

        const res = await fetch("https://api-mumbai.lens.dev", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options,
                "x-access-token": token ? token : "",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                query,
                variables
            })
        })

        const json = await res.json()
        
        if (json.errors) {
            console.log("Error in auth-fetcher");
            const { message } = json.errors[0] || {}
            throw new Error(message || 'Error…')
        }
        return json.data
    }
}