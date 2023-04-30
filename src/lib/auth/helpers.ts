import { json } from "stream/consumers";

const STORAGE_KEY = 'LH_STORAGE_KEY';

//simple function to say if the token is expired or not
export function isTokenExpired(exp:number){
    if(!exp)return true;
    if(Date.now() <= exp *1000  )return true;
    return false;
}


// 1. reading the access tokens from storage
export function readAccesToken(){
    //make sure we are in a client environment
    if(typeof window === undefined)return null;
    const ls = localStorage || window.localStorage;
    if(!ls){
        throw new Error("LocalStorage not available")
    }  
    const data = ls.getItem(STORAGE_KEY);
    if(!data)return null;


   return JSON.parse(data) as {
    accessToken:string,
    refreshToken:string,
    exp:number
   }
}

// 2. Setting the access tokens in storage
export function setAccesToken(
    accessToken:string,
    refreshToken:string
    ){
        //1. Parse the JWT token to get the expriration date
        const {exp}= parseJwt(accessToken);

        //2. set all three variables inside the local storage using storage key
        const ls = localStorage || window.localStorage;
        if(!ls){
            throw new Error("LocalStorage not available")
        }
        ls.setItem(STORAGE_KEY,JSON.stringify({accessToken,refreshToken,exp}));
}
// 3.Parse The JWT token that comes back and extract the exp field
export function parseJwt (token:string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}