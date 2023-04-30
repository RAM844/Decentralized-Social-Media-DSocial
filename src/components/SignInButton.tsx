import { useAddress, useNetworkMismatch, useNetwork, ConnectWallet, ChainId } from '@thirdweb-dev/react'
import React from 'react'

type Props = {}

export default function SignInButton({}: Props) {
    const address = useAddress();// detect the connected address
    const isOnWrongNetwork = useNetworkMismatch();// Detect if the user is in wront network
    const [,switchNetwork] = useNetwork();//function to switch the network


  //1.user need to connect thier wallet. 
  if(!address){
    return <ConnectWallet/>;
    
  }
  //2. user needs to switch networks to polygon.
  if(isOnWrongNetwork){
    return (
        <button
        onClick={()=>switchNetwork?.(ChainId.Polygon)}>
            Switch Network
        </button>
    )
  }


  //3. Sing in with lens.
  // if()

  //4. show the user thier profile on lens.

}