import { fetcher } from "@/graphql/auth-fetcher";
import { RefreshDocument, RefreshMutation, RefreshMutationVariables } from "@/graphql/generated";
import { readAccesToken,setAccesToken } from "./helpers";

export default async function refreshAccesToken() {

    //read access token 
    //1.get our current refresh token from local storage 
    const currentRefreshToken = readAccesToken()?.refreshToken;

    if(!currentRefreshToken)return null;
    
    //2. Send it to lens to ask for new acces token
    const result = await fetcher<RefreshMutation, RefreshMutationVariables>(RefreshDocument, 
    {
        request:{
            refreshToken:currentRefreshToken
        },
    })();

    //3. set the new access token in local storage

    const {accessToken,refreshToken: newRefreshToken} = result.refresh;
    setAccesToken(accessToken,newRefreshToken);

    return accessToken as string;

}