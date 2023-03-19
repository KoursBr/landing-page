import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      mr={"140px"}
      ml={"140px"}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            position={"relative"}
          >
            <Box position={"absolute"} left={"-25px"} top={"-15px"}>
              <Image src='undraw_two-lines.svg' alt='Two lines tilted 30 deg' fill />
            </Box>
            <Text as={"span"} position={"relative"}>
              Sua plataforma
            </Text>
            <br />{" "}
            <Box
              display="inline-flex"
              gap={4}
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            >
              <Text>de</Text>
              <Text fontWeight={"light"} color={"primary"}>
                cursos
              </Text>
            </Box>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Nullam mus adipiscing adipiscing tellus ut vulputate vel posuere
            ornare, eu facilisis ultrices nascetur quisque hac ante, senectus
            cras sociosqu tincidunt dapibus cubilia hac.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"white"}
              color={"primary"}
              size={"lg"}
              fontFamily={"Quicksand"}
              border={"1px solid"}
              _hover={{
                bg: "primary",
                color: "white",
              }}
            >
              Cadastre-se
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src='undraw_teaching.svg'  fill />
      </Flex>
    </Stack>
  );
}
