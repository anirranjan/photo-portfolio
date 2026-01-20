import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

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
          src="/profile-photo.jpg"
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

        <Text mb={4} fontSize="large">
          I’m a Dallas-based car and portrait photographer. I’ve photographed
          motorsport events, graduations, festivals, and corporate events. My
          goal is to capture happy moments and accomplishments through photo and
          video.
        </Text>

        <Button
          leftIcon={<FaEnvelope />}
          colorScheme="blue"
          onClick={() => navigate("/contact")}
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
};

export default AboutPage;
