import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ImageGallery from "./ImageGallery";

const HomePage = () => {
  const fadeIn = keyframes`
from { opacity: 0; transform: translateY(40px); }
to { opacity: 1; transform: translateY(0); }
`;

  const slideInLeft = keyframes`
from { opacity: 0; transform: translateX(-50px); }
to { opacity: 1; transform: translateX(0); }
`;

  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();
  const fadeInAnimation = prefersReducedMotion
    ? undefined
    : `${fadeIn} 1s ease forwards`;

  const slideInAnimation = prefersReducedMotion
    ? undefined
    : `${slideInLeft} 1s ease forwards`;

  return (
    <>
      {/* HERO SECTION */}
      <Box
        minH="90vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={6}
        bgGradient="linear(to-r, blackAlpha.800, blackAlpha.600)"
        bgImage="./IMG_1240.jpg"
        bgSize="cover"
        bgPosition="center"
        color="white"
        position="relative"
        overflow="hidden"
      >
        <Box animation={fadeInAnimation} maxW="800px" zIndex="1">
          <Stack spacing={6}>
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              letterSpacing="wide"
              animation={slideInAnimation}
            >
              Nirranjan Media
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              opacity={0.9}
              animation={fadeInAnimation}
            >
              Dallas-based car & portrait photographer capturing happy moments,
              milestones, and accomplishments through photo and video.
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              justify="center"
            >
              <Button
                colorScheme="whiteAlpha"
                variant="outline"
                size="lg"
                _hover={{ transform: "scale(1.05)", bg: "whiteAlpha.300" }}
                animation={fadeInAnimation}
                onClick={() => navigate("/about")}
              >
                About
              </Button>
              <Button
                colorScheme="whiteAlpha"
                size="lg"
                _hover={{ transform: "scale(1.05)", bg: "whiteAlpha.300" }}
                animation={fadeInAnimation}
                onClick={() => navigate("/contact")}
              >
                Contact
              </Button>
            </Stack>
          </Stack>
        </Box>
        {/* Optional subtle moving overlay for parallax effect */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blackAlpha.500"
          zIndex="0"
          style={{ animation: "pulse 6s ease-in-out infinite" }}
        />
      </Box>
      {/* IMAGE GALLERY */}
      <Box bg="gray.50" py={12}>
        <ImageGallery />
      </Box>
    </>
  );
};

export default HomePage;
