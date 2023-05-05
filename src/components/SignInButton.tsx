import useLensUser from '@/lib/auth/useLensUser';
import useLogin from '@/lib/auth/useLogin';
import { useAddress, useNetworkMismatch, useNetwork, ConnectWallet, ChainId, MediaRenderer } from '@thirdweb-dev/react'
import React from 'react'

type Props = {}

export default function SignInButton({ }: Props) {
  const address = useAddress();// detect the connected address
  const isOnWrongNetwork = useNetworkMismatch();// Detect if the user is in wront network
  const [, switchNetwork] = useNetwork();//function to switch the network
  const { isSignedInQuery, profileQuery } = useLensUser();
  const { mutate: requestLogin } = useLogin();

  //1.user need to connect thier wallet. 
  if (!address) {
    return <ConnectWallet />;
  }
  //2. user needs to switch networks to polygon.
  if (isOnWrongNetwork) {
    return (
      <button
        onClick={() => switchNetwork?.(ChainId.Polygon)}>
        Switch Network
      </button>
    )
  }


  //loading their signed in state
  if (isSignedInQuery.isLoading) {
    return <div>Loading...</div>;
  }

  //if the user is not signed in, we need to request a login
  if (!isSignedInQuery.data) {
    return <button onClick={() => requestLogin()}>Sign in with lens</button>;
  }

  //loading their profile information
  if (profileQuery.isLoading) {
    return <div>Loading...</div>;
  }

  //If its done loading and there's no default profile
  if (!profileQuery.data?.defaultProfile) {
    return <div>No Lens Profile.</div>;
  }

  //If its done loading and there's a default profile
  if (profileQuery.data?.defaultProfile) {
    return (
      <div>
        <MediaRenderer
          // @ts-ignore
          src={profileQuery?.data?.defaultProfile?.picture?.original?.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRFfdoiAytXb9La4zYInK2y3Qp8Cc8_qfIrEmQnIBzCuM-H-NBkZ9ynPl35aUVjNzhvU&usqp=CAU"}
          alt={profileQuery.data.defaultProfile.name || ""}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
          }}
        />
      </div>
    );
  }

  return <div>Something went wrong</div>;

}