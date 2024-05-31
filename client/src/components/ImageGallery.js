import React, { useState, useEffect } from 'react';
import { Grid, Image } from '@chakra-ui/react';
import axios from 'axios';

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:3001/image-urls")
      setImageUrls(response.data)
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {imageUrls.map((imageUrl, index) => (
          <Image key={index} src={imageUrl} alt={`Image ${index}`} />
        ))}
    </Grid>
  );
};

export default ImageGallery;
