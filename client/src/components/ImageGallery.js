import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { Grid, Image, Box } from "@chakra-ui/react";
import axios from "axios";

const ImageGallery = () => {
  const [imageKeys, setImageKeys] = useState([]);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1,
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://u2k1rag660.execute-api.us-east-2.amazonaws.com/dev"
      );
      setImageKeys(response.data.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <Box p={8}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonryGrid"
        columnClassName="masonryColumn"
      >
        {imageKeys.map((key, index) => (
          <Box key={index} overflow="hidden" borderRadius="md">
            <Image
              src={`https://d12yplbc29r1vu.cloudfront.net/${key}`}
              alt={`Image ${index}`}
              width="100%"
              height="auto"
              loading="lazy"
            />
          </Box>
        ))}
      </Masonry>
    </Box>
  );
};

export default ImageGallery;
