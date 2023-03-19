import {
  Stack,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";

export default function About() {
  return (
    <Stack position={"relative"}>
      <Box>
        <Image src='/assets/marvin-meyer-SYTO3xs06fU-unsplash 1.png' alt="" width={3000} height={3000}/>
      </Box>
      <Box
        position={"absolute"}
        top={"-9px"}
        w={"100%"}
        h={"100%"}
        bg={"primary"}
        opacity={"75%"}
        display={"Flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}
      ></Box>
      <Stack
        position={"absolute"}
        w={"100%"}
        display={"Flex"}
        align={"center"}
        justify={"center"}
        direction={"row"}
        h={"100%"}
        spacing={20}
      >
        <Text
          fontSize={{ base: "xl", md: "5xl" }}
          fontWeight={"bold"}
          color={"white"}
          fontFamily={"Quicksand"}
          w={"40%"}
        >
          Crie, ensine e administre seus cursos
        </Text>
        <Divider
          orientation="vertical"
          h={{ base: 40, md: 80 }}
          border={"2px solid white"}
        />
        <Text
          fontSize={{ base: "sm", md: "2xl" }}
          color={"white"}
          fontFamily={"Roboto"}
          opacity={"75%"}
          w={"40%"}
        >
          Nullam mus adipiscing adipiscing tellus ut vulputate vel posuere
          ornare, eu facilisis ultrices nascetur quisque hac ante, senectus cras
          sociosqu tincidunt dapibus cubilia hac.
        </Text>
      </Stack>
    </Stack>
  );
}
