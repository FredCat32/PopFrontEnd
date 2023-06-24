import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import "@fontsource/space-mono";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

import { createConfig, configureChains, mainnet, createClient, wagmiClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'


export default function App({ Component, pageProps }) {
  if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
    throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
  }

  const projectId = '5921a31c100232bc339f04e342b5e341'
  //const chains = [polygonMumbai];

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [publicProvider()],
  )
   
  const config = createClient({
    publicClient,
    webSocketPublicClient,
  })
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ version: 1, chains, projectId }),
    publicProvider,
  });
  console.log(wagmiClient, 'xxxxxxxxxx');

  const ethereumClient = new EthereumClient(wagmiClient, chains);

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  const customTheme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "#1e1e20",
        },
        html: {
          bg: "#1e1e20",
        },
      },
    },
  });

  return (
    <>
      {ready ? (
        <ChakraProvider theme={customTheme}>
          <WagmiConfig client={wagmiClient}>
            <Box
              bgColor="#1e1e20"
              m="auto"
              maxW={1500}
              minH={850}
              color="whiteAlpha.800"
            >
              <Component {...pageProps} provider={publicProvider} />
            </Box>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          </WagmiConfig>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="dark"
          />
        </ChakraProvider>
      ) : null}
    </>
  );
}
