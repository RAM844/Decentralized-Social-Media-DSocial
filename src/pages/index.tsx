import {
  PublicationSortCriteria,
  useExplorePublicationsQuery
} from "@/graphql/generated"
import useLogin from "@/lib/auth/useLogin";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react"

export default function Home() {
  const address = useAddress();
  const {mutate:requestLogin} = useLogin();
  if(!address){
    return(<ConnectWallet/>)
  }
  return <button onClick={()=>requestLogin()}>Login</button>
}
