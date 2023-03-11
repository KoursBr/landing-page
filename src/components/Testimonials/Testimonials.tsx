import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Image,
  useColorMode,
  Flex,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CardProps {
  image: string;
  name: string;
  occupation: string;
  company: string;
  description: string;
}

const Card = ({ image, name, description, company, occupation }: CardProps) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.700" };
  const color = { light: "gray.700", dark: "white" };

  return (
    <Box
      p={5}
      shadow="md"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      rounded="lg"
      m={4}
      maxW="sm"
      w={{ base: "80%", md: "30%" }}
      h="400px"
    >
      <Text
        mt={2}
        mb={4}
        textAlign="center"
        w={{ base: "200px", md: "350px" }}
        fontSize={{ base: "xs", md: "md" }}
        fontFamily="Roboto"
      >
        {description}
      </Text>
      <Flex align="center">
        <Image src={image} alt={name} borderRadius="full" />
        <Box flexDirection="column" ml="4">
          <Text fontWeight="bold" fontFamily={"Quicksand"}>
            {name}
          </Text>
          <Text>
            {occupation} | {company}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const cards: CardProps[] = [
    {
      image: "https://i.pravatar.cc/100",
      name: "Nome",
      description:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as thei",
      occupation: "CTO",
      company: "Empresa",
    },
    {
      image: "https://i.pravatar.cc/101",
      name: "Nome",
      description:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as thei",
      occupation: "CTO",
      company: "Empresa",
    },
    {
      image: "https://i.pravatar.cc/102",
      name: "Nome",
      description:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as thei",
      occupation: "CTO",
      company: "Empresa",
    },
    {
      image: "https://i.pravatar.cc/103",
      name: "Nome",
      description:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as thei",
      occupation: "CTO",
      company: "Empresa",
    },
    {
      image: "https://i.pravatar.cc/104",
      name: "Nome",
      description:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as thei",
      occupation: "CTO",
      company: "Empresa",
    },
    {
      image: "https://i.pravatar.cc/105",
      name: "Nome",
      description:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as thei",
      occupation: "CTO",
      company: "Empresa",
    },
  ];

  return (
    <Box
      id="Testimonials"
      bg={"LightBlue"}
      h={{ base: "1500px", md: "600px" }}
      mt="8"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as="h1"
        fontSize={"5xl"}
        textAlign="center"
        mb={5}
        mt="8"
        color={"primary"}
        fontFamily={"Quicksand"}
      >
        Depoimentos
      </Heading>
      <Box display="flex" justifyContent="space-between">
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          justifyContent="center"
          ml={{ md: "2" }}
        >
          <FaChevronLeft
            size={40}
            onClick={() => setIndex(index === 0 ? cards.length - 3 : index - 3)}
            cursor="pointer"
            color={"#0074D9"}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          {cards.slice(index, index + 3).map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          justifyContent="center"
          mr={{ md: "2" }}
        >
          <FaChevronRight
            size={40}
            onClick={() => setIndex(index === cards.length - 3 ? 0 : index + 3)}
            cursor="pointer"
            color={"#0074D9"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
