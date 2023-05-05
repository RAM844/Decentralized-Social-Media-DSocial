import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Header from '@/components/Header';



export default function App({ Component, pageProps }: AppProps) {
  //Create a client
  const queryClient = new QueryClient();

  const desiredChainId = ChainId.Polygon
  return (
    <ThirdwebProvider activeChain={desiredChainId}>
      {/* here it should be desiredChainId as It is giving me error i will be assuming
desiredChainId and activeChain are same and moveForward */}
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThirdwebProvider>
  );
}
