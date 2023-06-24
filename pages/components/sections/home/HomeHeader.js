import { Flex, Image, Spacer, Link } from "@chakra-ui/react";

import { Web3Button, useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import { polygonMumbai } from "wagmi/chains";

function CustomLink({ link, text }) {
  return (
    <>
      <Link
        transition="0.2s"
        _hover={{ textShadow: "#CE8A00 1px 0 10px" }}
        href={link}
      >
        {text}
      </Link>
    </>
  );
}

export default function HomeHeader() {
  const { isConnected } = useAccount();

  const { setDefaultChain } = useWeb3Modal();
  setDefaultChain(polygonMumbai);

  return (
    <>
      <Flex
        direction="row"
        w="100%"
        borderBottom="1px solid #CE8A00"
        align="center"
        fontFamily="Space Mono"
        p={7}
        pl={10}
        pr={10}
      >
        <Image src="/logo.png" h={16} w={16} />
        <Spacer />
        {isConnected ? (
          <>
            <Flex direction="row" gap={10} fontSize={22} mr={10}>
              <CustomLink link="/dashboard" text="Dashboard" />
              <CustomLink link="/mint" text="Mint" />
              <CustomLink link="/buy" text="Buy" />
              <CustomLink link="/sell" text="Sell" />
            </Flex>
          </>
        ) : (
          <></>
        )}
        <Web3Button label="Connect" />
      </Flex>
    </>
  );
}
