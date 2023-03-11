/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Textarea,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ContactUsimg from "../../assets/contactIMG.svg";
import Image from "next/image";

export default function Contact() {
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <Flex bg={"white"} align="center" justify="center" id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              textAlign={{ base: "center", sm: "center" }}
              fontSize={{
                base: "2xl",
                sm: "3xl",
                md: "5xl",
              }}
              color={"primary"}
              fontFamily={"Quicksand"}
            >
              Mande uma mensagem para nós
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "row", md: "row" }}
              align={{ sm: "center" }}
              justify={{ sm: "center" }}
            >
              <Box
                mr="8"
                display={{ base: "none", sm: "none", md: "contents" }}
              >
                <Image src={ContactUsimg} alt="Contact image" />
              </Box>
              <Box>
                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  m="2"
                  w={{ sm: "280px", md: "481px" }}
                  h={{ md: "550px" }}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  rounded={"2xl"}
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="2xl"
                >
                  <VStack spacing={5}>
                    <Heading color={"primary"} fontWeight={700}>
                      Entre em contato
                    </Heading>
                    <FormControl>
                      <FormLabel color="primary" fontWeight={700}>
                        Nome
                      </FormLabel>

                      <InputGroup>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Digite..."
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel color="primary" fontWeight={700}>
                        Email
                      </FormLabel>

                      <InputGroup>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Digite..."
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel color="primary" fontWeight={700}>
                        Mensagem
                      </FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Digite..."
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      bg="primary"
                      w="163px"
                      borderRadius="20px"
                      color="white"
                      _hover={{
                        bg: "#6d4cad",
                      }}
                    >
                      Enviar
                    </Button>
                  </VStack>
                </Box>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
