import {
  Image,
  Divider,
  Stack,
  Text,
  Container,
  Box,
  keyframes,
  Button,
  HStack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import profilePic from "../assets/profilepic.jpg"
import { motion } from 'framer-motion';
import { useState } from "react";
export default function About({ color }) {
  const profile = ProfileArray();
  const[isHovering, setIsHovering] = useState(false);
  const animationKeyframes = keyframes`
  0% { transform: rotate(0); }
  25% { transform: rotate(0);}
  50% { transform: rotate(360deg); }
  75% { transform: rotate(360deg);}
  100% { transform: rotate(0);}
`;
 const animation = `${animationKeyframes} 2s ease-in-out infinite`;

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
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  _hover={{
                    animation: animation
                  }}
                  
                  borderRadius='full'
                  boxSize='150px'
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

