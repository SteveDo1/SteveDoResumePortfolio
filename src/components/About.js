import {
  Image,
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import profilePic from "../assets/profilepic.jpg"
export default function About({ color }) {
  const profile = ProfileArray();
    return (
      <>
        <Container maxW={"3xl"} id="about">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  01.
                </Text>
                <Text fontWeight={800} w={20}>About Me</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            <Stack>
              <HStack mx={1}>
                <Image
                  borderRadius='full'
                  boxSize='150px'
                  //src='https://media.licdn.com/dms/image/C4E03AQHZysailNTsww/profile-displayphoto-shrink_800_800/0/1520392582627?e=1687996800&v=beta&t=2e685tW1f9iZfiNtlGuSoEI4tDVyt8iYIfzhVY_fmJc'
                  src= {profilePic}
                  alt='Steve Do Profile Picture'
                />
                <Text color={"white.600"} fontSize={"xl"} px={3}>
                  {profile.about}
                </Text>
                </HStack>
            </Stack>
            
            {/* TODO: Add section for profile picture, skills, marquis */}
            
          </Stack>
        </Container>
      </>
    );
}

