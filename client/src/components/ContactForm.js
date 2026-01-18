import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  Textarea,
  useToast,
  Container,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = async (data) => {
    try {
      await axios.post("https://u2k1rag660.execute-api.us-east-2.amazonaws.com/dev/contact", {
        name: data.name,
        email: data.email,
        message: data.message
      })

      toast({
        title: "Message sent!",
        description: "Thanks — I’ll get back to you soon.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or email me directly.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.md" py={{ base: 10, md: 16 }}>
      <Box
        p={{ base: 5, md: 8 }}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="sm"
      >
        <Heading size={{ base: "lg", md: "xl" }} mb={3}>
          Contact Me
        </Heading>

        <Text fontSize={{ base: "md", md: "lg" }} mb={2}>
          To enquire about potential collaborations, please fill out the contact
          form or email the address shown below!
        </Text>

        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" mb={8}>
          nirranjanmedia@gmail.com
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={{ base: 4, md: 5 }} align="stretch">
            {/* Name + Email row */}
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <GridItem>
                <FormControl isInvalid={errors.name} isRequired>
                  <Input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Name"
                    size={{ base: "md", md: "lg" }}
                  />
                  <FormErrorMessage>
                    {errors.name?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isInvalid={errors.email} isRequired>
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Email"
                    size={{ base: "md", md: "lg" }}
                  />
                  <FormErrorMessage>
                    {errors.email?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
            </Grid>

            {/* Message */}
            <FormControl isInvalid={errors.message} isRequired>
              <Textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Message"
                size={{ base: "md", md: "lg" }}
                rows={6}
                resize="vertical"
              />
              <FormErrorMessage>
                {errors.message?.message}
              </FormErrorMessage>
            </FormControl>

            {/* Submit */}
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isSubmitting}
              loadingText="Sending..."
              size={{ base: "md", md: "lg" }}
              w={{ base: "100%", sm: "fit-content" }}
              alignSelf={{ base: "stretch", sm: "flex-start" }}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
