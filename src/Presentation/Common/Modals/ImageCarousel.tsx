import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { ImageProperty } from "../../../Common/Interface/ImageProperty";

interface props {
  index: number;
  windowWidth: number;
  image: ImageProperty;
}

const ImageCarousel: React.FC<props> = (props) => {
  const { index, windowWidth, image } = props;

  return (
    <Box key={index}>
      <Image maxW={windowWidth / 2} src={image.image} objectFit="contain" />
    </Box>
  );
};

export default ImageCarousel;
