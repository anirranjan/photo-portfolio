import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

const AboutPage = () => {
  return (
    <Box
      p={8}
      maxW="1000px"
      mx="auto"
      display={{ lg: "flex" }}
      alignItems="center"
      gap={{ base: 4, lg: 6 }}
    >
      {/* Image */}
      <Box
        width={{ base: "100%", lg: "320px" }}
        flexShrink={0}
        order={{ base: 2, lg: 1 }}
        mb={{ base: 4, lg: 0 }}
      >
        <Image
          src="/IMG_1461.jpg"
          alt="Nirranjan"
          width="100%"
          height="auto"
          borderRadius="md"
        />
      </Box>

      {/* Text */}
      <Box flex="1" order={{ base: 1, lg: 2 }}>
        <Heading size="md" mb={2}>
          Hi, I'm Nirranjan.
        </Heading>

        <Text mb={4}>
          I’m a Dallas-based car and portrait photographer. I’ve photographed
          motorsport events, graduations, festivals, and corporate events. My
          goal is to capture happy moments and accomplishments. Contact me today
          to book your photoshoot.
        </Text>

        <Button
          leftIcon={<FaInstagram />}
          as="a"
          href="https://www.instagram.com/nirranjan.media"
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="red"
        >
          Instagram
        </Button>
      </Box>
    </Box>
  );
};

export default AboutPage;
