import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
  Link,
  Button,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileArray from "./ProfileArray";

export default function Contact({ color }) {
  const profile = ProfileArray();
  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
  };
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04.
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Text color={"gray.500"} fontSize={"xl"} px={4}>
              {profile.contact}
            </Text>
            <Center>
              <Button
                colorScheme={color}
                align='center'
                w='30%'
                bg={`${color}.400`}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: `${color}.500`,
                }}
                onClick={email}
              >
                Say Hello!
              </Button>
            </Center>
            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin onClick={linkedin} size={28} />
                <FaGithub onClick={github} size={28} />
                <FaEnvelope onClick={email} size={28} />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

