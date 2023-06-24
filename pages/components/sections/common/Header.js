import {
  Image,
  Flex,
  Box,
  Spacer,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef } from "react";

import "@fontsource/apfel-grotezk";

import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaReddit,
} from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // const { isConnected } = useAccount();

  return (
    <>
      <Flex
        p={10}
        pt={7}
        pb={7}
        borderBottom="1px solid #CE8A00"
        direction="row"
        justify="center"
        align="center"
      >
        <Box h="fit-content" w="fit-content" _hover={{ cursor: "pointer" }}>
          <Image
            src="/logo.png"
            h={16}
            w={16}
            onClick={() => {
              router.push("/");
            }}
          />
        </Box>
        <Spacer />
        <Box>
          <Button
            _hover={{}}
            _active={{}}
            color="#CE8A00"
            cursor="pointer"
            p={2}
            as={RxHamburgerMenu}
            ref={btnRef}
            h={50}
            w={50}
            bgColor="transparent"
            onClick={onOpen}
          />
          <Drawer
            isOpen={isOpen}
            size="xs"
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent color="white" bgColor="black">
              <DrawerHeader fontSize={20} fontFamily="Space Mono">
                Menu
              </DrawerHeader>

              <DrawerBody fontWeight={900}>
                <UnorderedList
                  styleType="none"
                  letterSpacing={2}
                  fontSize={35}
                  fontFamily="Apfel Grotezk"
                  spacing={3}
                  pt={32}
                >
                  <ListItem>
                    <Link href="/">Home</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/dashboard">Dashboard</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/buy">Buy</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/sell">Sell</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/mint">Mint</Link>
                  </ListItem>
                </UnorderedList>
              </DrawerBody>

              <DrawerFooter>
                <Flex direction="row" w="100%" gap={3} color="#CE8A00">
                  <Link>
                    <FaInstagram size={30} />
                  </Link>
                  <Link>
                    <FaFacebook size={30} />
                  </Link>
                  <Link>
                    <FaTwitter size={30} />
                  </Link>
                  <Link>
                    <FaReddit size={30} />
                  </Link>
                  <Link>
                    <FaTelegram size={30} />
                  </Link>
                </Flex>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </>
  );
}
