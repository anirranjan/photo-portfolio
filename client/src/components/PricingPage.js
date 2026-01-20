import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  usePrefersReducedMotion,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const PricingPage = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const cardProps = {
    bg: "white",
    p: 8,
    borderRadius: "xl",
    shadow: "xl",
    _hover: {
      transform: "translateY(-10px)",
      shadow: "2xl",
      transition: "0.3s",
    },
  };

  const imageProps = {
    borderRadius: "xl",
    shadow: "xl",
    w: "100%",
    aspectRatio: 4 / 3,
    objectFit: "cover",
    objectPosition: "center",
  };

  return (
    <Box maxW="7xl" mx="auto" py={12} px={6}>
      <Heading textAlign="center" mb={16} fontSize={{ base: "3xl", md: "4xl" }}>
        Pricing & Packages
      </Heading>

      <VStack spacing={20} align="stretch">
        {/* ---------------- PHOTOGRAPHY PACKAGES ---------------- */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems="center"
        >
          <MotionBox
            order={{ base: 2, md: 1 }}
            initial={prefersReducedMotion ? {} : "hidden"}
            whileInView={prefersReducedMotion ? {} : "visible"}
            viewport={{ once: true }}
            variants={fadeUp}
            {...cardProps}
          >
            <Heading size="lg" mb={4}>
              Regular Session
            </Heading>
            <Text>1 hour, 1 location</Text>
            <Text>10-20 edited digital photos</Text>
            <Text>Perfect for casual portraits or social media posts</Text>
            <Text fontWeight="bold" mt={2}>
              Price: $30
            </Text>

            <Divider my={4} />

            <Heading size="lg" mb={4}>
              Extended Session
            </Heading>
            <Text>2 hours, 1 location</Text>
            <Text>20-30 edited digital photos</Text>
            <Text>Ideal for graduation, small events, or lifestyle shoots</Text>
            <Text fontWeight="bold" mt={2}>
              Price: $50
            </Text>

            <Divider my={4} />

            <Heading size="lg" mb={4}>
              Event Coverage
            </Heading>
            <Text>2-3 hours</Text>
            <Text>40-50 edited digital photos</Text>
            <Text>Good for small festivals or birthday parties</Text>
            <Text fontWeight="bold" mt={2}>
              Price: $80
            </Text>
          </MotionBox>

          <MotionBox
            order={{ base: 1, md: 2 }}
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={
              prefersReducedMotion
                ? {}
                : { opacity: 1, scale: 1, transition: { duration: 0.8 } }
            }
          >
            <Image
              src="./event-sample.jpg"
              alt="Photography example"
              {...imageProps}
            />
          </MotionBox>
        </SimpleGrid>

        {/* ---------------- VIDEOGRAPHY PACKAGES ---------------- */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems="center"
        >
          <MotionBox
            order={{ base: 2, md: 1 }}
            initial={prefersReducedMotion ? {} : "hidden"}
            whileInView={prefersReducedMotion ? {} : "visible"}
            viewport={{ once: true }}
            variants={fadeUp}
            {...cardProps}
          >
            <Heading size="lg" mb={4}>
              Short Video
            </Heading>
            <Text>30 sec-1 min video edit</Text>
            <Text>Short highlight for social media</Text>
            <Text fontWeight="bold" mt={2}>
              Price: $40
            </Text>

            <Divider my={4} />

            <Heading size="lg" mb={4}>
              Long Video
            </Heading>
            <Text>2-3 min video edit</Text>
            <Text>For events and celebrations</Text>
            <Text fontWeight="bold" mt={2}>
              Price: $70
            </Text>
          </MotionBox>

          <MotionBox
            order={{ base: 1, md: 2 }}
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={
              prefersReducedMotion
                ? {}
                : { opacity: 1, scale: 1, transition: { duration: 0.8 } }
            }
          >
            <Image
              src="./photo-sample.jpg"
              alt="Videography example"
              {...imageProps}
            />
          </MotionBox>
        </SimpleGrid>

        {/* ---------------- CAR PACKAGES ---------------- */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems="center"
        >
          <MotionBox
            order={{ base: 2, md: 1 }}
            initial={prefersReducedMotion ? {} : "hidden"}
            whileInView={prefersReducedMotion ? {} : "visible"}
            viewport={{ once: true }}
            variants={fadeUp}
            {...cardProps}
          >
            <Heading size="lg" mb={4}>
              Car Session
            </Heading>
            <Text>2 hours, 1 location</Text>
            <Text>20-30 edited digital photos</Text>
            <Text fontWeight="bold" mt={2}>
              Price: $60
            </Text>

            <Divider my={4} />

            <Heading size="lg" mb={4}>
              Track Day Coverage
            </Heading>
            <Text>3-5 hours</Text>
            <Text>50-60 edited digital photos</Text>
            <Text fontWeight="bold" mt={2}>
              Price: $90
            </Text>

            <Divider my={4} />

            <Text fontSize="sm" color="gray.500">
              *Please bring an additional vehicle if you want rolling photos.
            </Text>
          </MotionBox>

          <MotionBox
            order={{ base: 1, md: 2 }}
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={
              prefersReducedMotion
                ? {}
                : { opacity: 1, scale: 1, transition: { duration: 0.8 } }
            }
          >
            <Image src="./IMG_0635.jpg" alt="Car example" {...imageProps} />
          </MotionBox>
        </SimpleGrid>

        {/* ---------------- ADD-ONS ---------------- */}
        <MotionBox
          initial={prefersReducedMotion ? {} : "hidden"}
          whileInView={prefersReducedMotion ? {} : "visible"}
          viewport={{ once: true }}
          variants={fadeUp}
          {...cardProps}
          maxW="xl"
          mx="auto"
          textAlign="center"
        >
          <Heading size="lg" mb={4}>
            Add-Ons
          </Heading>
          <Text>Additional Edited Photo(s): $2 each</Text>
          <Text>Rush Delivery (24-48 hours): $30</Text>
        </MotionBox>
      </VStack>
    </Box>
  );
};

export default PricingPage;
