import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  useBreakpointValue,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import pc from "../../assets/pc.svg";
import grafico from "../../assets/grafico.svg";
import chat from "../../assets/chat.svg";
import money from "../../assets/money.svg";
import dots from "../../assets/dots.svg";
import squircle from "../../assets/squircle2.svg";
import rectangle from "../../assets/Rectangle.svg";

export default function About() {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      templateRows={{ base: "repeat(6, 1fr)", md: "repeat(2, 1fr)" }}
      gap={{ base: 2, md: 6 }}
      m={{ base: "10px", md: "140px" }}
      position={"relative"}
    >
      <GridItem
        colSpan={{ base: 1, md: 2 }}
        bg="#BDDBF6"
        h={{ base: "200px", md: "240px" }}
        rounded={"3xl"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={{ base: "center" }}
      >
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          ml={{ base: 2, md: 8 }}
          color={"primary"}
        >
          O que nós oferecemos
        </Heading>
      </GridItem>
      <GridItem
        bg="primary"
        h={{ base: "200px", md: "240px" }}
        rounded={"3xl"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          display={"flex"}
          alignItems={{ base: "center", md: "left" }}
          justifyContent={"center"}
          flexDirection={{ base: "column", md: "column" }}
          w={{ base: "100%", md: "250px" }}
        >
          <Image src={pc} alt="" />
          <Heading fontSize={{ base: "md", md: "xl" }} color={"white"}>
            Lorem Ipsum
          </Heading>
          <Text fontSize={"xs"} color={"white"} textAlign={{ base: "center" }}>
            Ultrices. Quisque eros pellentesque facilisis justo urna facilisis
            rutrum nascetur, pede elit dis platea.
          </Text>
        </Stack>
      </GridItem>
      <GridItem
        bg="primary"
        h={{ base: "200px", md: "240px" }}
        rounded={"3xl"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          display={"flex"}
          alignItems={{ base: "center", md: "left" }}
          justifyContent={"center"}
          flexDirection={{ base: "column", md: "column" }}
          w={{ base: "100%", md: "250px" }}
        >
          <Image src={money} alt="" />
          <Heading fontSize={{ base: "md", md: "xl" }} color={"white"}>
            Lorem Ipsum
          </Heading>
          <Text fontSize={"xs"} color={"white"} textAlign={{ base: "center" }}>
            Ultrices. Quisque eros pellentesque facilisis justo urna facilisis
            rutrum nascetur, pede elit dis platea.
          </Text>
        </Stack>
      </GridItem>
      <GridItem
        bg="primary"
        h={{ base: "200px", md: "240px" }}
        rounded={"3xl"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          display={"flex"}
          alignItems={{ base: "center", md: "left" }}
          justifyContent={"center"}
          flexDirection={{ base: "column", md: "column" }}
          w={{ base: "100%", md: "250px" }}
        >
          <Image src={grafico} alt="" />
          <Heading fontSize={{ base: "md", md: "xl" }} color={"white"}>
            Lorem Ipsum
          </Heading>
          <Text fontSize={"xs"} color={"white"} textAlign={{ base: "center" }}>
            Ultrices. Quisque eros pellentesque facilisis justo urna facilisis
            rutrum nascetur, pede elit dis platea.
          </Text>
        </Stack>
      </GridItem>
      <GridItem
        bg="primary"
        h={{ base: "200px", md: "240px" }}
        rounded={"3xl"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          display={"flex"}
          alignItems={{ base: "center", md: "left" }}
          justifyContent={"center"}
          flexDirection={{ base: "column", md: "column" }}
          w={{ base: "100%", md: "250px" }}
        >
          <Image src={chat} alt="" />
          <Heading fontSize={{ base: "md", md: "xl" }} color={"white"}>
            Lorem Ipsum
          </Heading>
          <Text fontSize={"xs"} color={"white"} textAlign={{ base: "center" }}>
            Ultrices. Quisque eros pellentesque facilisis justo urna facilisis
            rutrum nascetur, pede elit dis platea.
          </Text>
        </Stack>
      </GridItem>
      <Box position={"absolute"} right={-10} top={-8}>
        <Image src={dots} alt="" />
      </Box>
      <Box position={"absolute"} bottom={-28} right={0}>
        <Image src={squircle} alt="" />
      </Box>
      <Box position={"absolute"} bottom={-20} left={0}>
        <Image src={rectangle} alt="" />
      </Box>
    </Grid>
  );
}
