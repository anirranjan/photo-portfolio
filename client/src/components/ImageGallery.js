import React, { useState, useEffect } from "react";
import { Grid, Image, Box } from "@chakra-ui/react";
import axios from "axios";

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://u2k1rag660.execute-api.us-east-2.amazonaws.com/dev");
      setImageUrls(response.data.data)
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2} p={8}>
      {imageUrls.map((imageUrl, index) => (
        <Box
          key={index}
          position="relative"
          w="100%"
          pb="100%"
          overflow="hidden"
        >
          <Image
            src={imageUrl}
            alt={`Image ${index}`}
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      ))}
    </Grid>
  );
};

export default ImageGallery;
