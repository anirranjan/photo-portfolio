import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

const AboutPage = () => {
  return (
    <Box p={8} display={{ md: "flex" }} alignItems="center">
      <Box
        flex={{ base: "1", md: "1" }}
        mb={{ base: 4, md: 0 }}
        order={{ base: 2, md: 1 }}
        maxW="90%"
      >
        <Image src="/IMG_3389.jpg" alt="Nirranjan" />
      </Box>
      <Box
        flex={{ base: "1", md: "2" }}
        ml={{ base: 0, md: 4 }}
        order={{ base: 1, md: 2 }}
      >
        <Box>
          <Heading size="md">Hi, I'm Nirranjan.</Heading>
          <Text>
            I am a car and portrait photographer based in Dallas. I started off
            photography with my phone, but got more serious after investing in
            my first camera. Contact me today to book your photoshoot!
          </Text>
          <Button
            leftIcon={<FaInstagram />}
            as="a"
            href="https://www.instagram.com/nirranjan.media"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
            mt={4}
          >
            Instagram
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
