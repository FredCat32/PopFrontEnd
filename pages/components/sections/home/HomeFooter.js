import { Flex, Heading, Image, Link, Spacer, Text } from "@chakra-ui/react";

import { ComeFromBottomWhenVisible } from "../common/TransitionBoxes";

export default function HomeFooter() {
  return (
    <>
      <ComeFromBottomWhenVisible>
        <Flex direction="column" bgColor="blackAlpha.600" gap={10} p={10}>
          <Flex direction="row" justify="center" align="center">
            <Text w="35%">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Spacer />
            <Flex direction="row" gap={10}>
              <Flex
                direction="column"
                h="100%"
                justify="center"
                textAlign={"right"}
              >
                <Heading>About</Heading>
                <Link>Overview</Link>
                <Link>History</Link>
              </Flex>
              <Flex
                direction="column"
                justify="center"
                h="100%"
                textAlign={"right"}
              >
                <Heading>Developers</Heading>
                <Link>Docs</Link>
                <Link>Examples</Link>
                <Link>Medium</Link>
                <Link>Getting Started</Link>
              </Flex>
              <Flex
                direction="column"
                justify="center"
                h="100%"
                textAlign={"right"}
              >
                <Heading>Community</Heading>
                <Link>Twitter</Link>
                <Link>Instagram</Link>
                <Link>Facebook</Link>
                <Link>Reddit</Link>
                <Link>Telegram</Link>
              </Flex>
              <Flex
                direction="column"
                justify="center"
                textAlign={"right"}
              ></Flex>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            align="center"
            borderTop="1px solid white"
            pt={10}
            gap={5}
          >
            <Image src="/favicon.ico" h={20} w={20} />
            <Heading size="2xl" fontFamily="Space Mono" letterSpacing={-1}>
              Mints For All
            </Heading>
            <Spacer />
            <Link>Terms And Conditions</Link>
            <Link>Privacy Policy</Link>
          </Flex>
        </Flex>
      </ComeFromBottomWhenVisible>
    </>
  );
}
