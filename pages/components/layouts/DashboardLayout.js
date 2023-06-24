import {
  Image,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { useAccount } from "wagmi";

import Header from "../sections/common/Header";

import { TbAlertTriangle } from "react-icons/tb";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DashboardLayout() {
  const router = useRouter();
  const { isConnected } = useAccount();
  const [ready, setReady] = useState(false);
  const [firstOpen, setFirstOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    async function execute() {
      onOpen();
      setFirstOpen(true);
    }
    if (!isConnected && ready) execute();
  }, [ready, isConnected]);

  useEffect(() => {
    if (!isOpen && firstOpen) {
      setFirstOpen(false);
      router.push("/");
    }
  }, [isOpen, firstOpen]);

  return (
    <>
      {ready ? (
        <>
          {!isConnected ? (
            <>
              <Image src="/error.gif" m={10} />
              <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
                <ModalOverlay />
                <ModalContent bgColor="#313131" color="white" mt={250}>
                  <ModalHeader color="red.500">
                    <Flex direction="row" align="center" gap={2}>
                      <Text fontSize={45}>Alert</Text>
                      <TbAlertTriangle size={40} />
                    </Flex>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody fontSize={30} pb={50}>
                    You need to connect your wallet before you can continue.
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          ) : (
            <>
              <Header />
              {/* <BuyHero /> */}
            </>
          )}
        </>
      ) : null}
    </>
  );
}
