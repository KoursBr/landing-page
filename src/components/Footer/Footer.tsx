import {
  Stack,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import Waves from "../../../public/assets/wavesFooter.svg";
import TeachMateLogo from "../../../public/assets/LogoTeachMateWhite.svg";

export default function About() {
  return (
    <Stack w={"full"}>
      <Box mb={"-4"}>
        <Image src={Waves} alt="" width={3000} />
      </Box>
      <Stack
        w={"full"}
        h={"250px"}
        bg={"primary"}
        align={"center"}
        justify={"center"}
      >
        <Image src={TeachMateLogo} alt="" />
      </Stack>
    </Stack>
  );
}
