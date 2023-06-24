import {
  Box,
  Flex,
  Image,
  Heading,
  UnorderedList,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdMoneyOff } from "react-icons/md";
import { HiOutlineCake } from "react-icons/hi";
import { FadeInWhenVisible } from "../common/TransitionBoxes";

export default function HomeHero() {
  return (
    <>
      <FadeInWhenVisible>
        <Box h={700}>
          <Flex m="auto" direction="row" justify="center" pt={70} gap={10}>
            <Image src="/bh.gif" height={400} width={400} />

            <Flex direction="column" w="50%" gap={10}>
              <Heading fontFamily="Space Mono" size="2xl" mt={5}>
                The power of NFTs at your finger tips.
              </Heading>
              <UnorderedList ml={0} fontSize={40} styleType="none" spacing={3}>
                <ListItem>
                  <ListIcon as={BsFillLightningChargeFill} color="yellow" />
                  Quick
                </ListItem>
                <ListItem>
                  <ListIcon as={HiOutlineCake} color="pink.600" />
                  Easy
                </ListItem>
                <ListItem>
                  <ListIcon as={MdMoneyOff} color="green" />
                  Free
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Box w="80%" m="70px auto" textAlign="center">
            An ERC-1155 Powered Blockchain Marketplace To Boost The Artist
            Economy.
          </Box>
        </Box>
      </FadeInWhenVisible>
    </>
  );
}
