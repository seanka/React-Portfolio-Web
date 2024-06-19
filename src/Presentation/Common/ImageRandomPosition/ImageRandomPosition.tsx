import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { useWindowDimension } from "../../../Common/Utils/useWindowDimension";
import { generateRandomPosition } from "../../../Common/Utils/generateRandomPosition";

interface props {
  src: string;
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
  multiplier?: number;
  imageSize?: (number | null)[];
  imageWidth?: (number | null)[];
  imageHeight?: (number | null)[];
}

const ImageRandomPosition: React.FC<props> = (props) => {
  const { width, height } = useWindowDimension();

  const { src, minX = 0, maxX = width, minY = 0, maxY = height, multiplier = 1, imageWidth, imageHeight, imageSize } = props;

  if (minX >= maxX || minY >= maxY) {
    return;
  }

  const { xPos, yPos } = generateRandomPosition(minX, maxX, minY, maxY, multiplier);

  const imageSizeProps = imageSize ? { boxSize: imageSize } : { width: imageWidth, height: imageHeight };

  if (Math.random() <= 0.5) {
    return (
      <Box position="absolute" bottom={yPos} right={xPos}>
        <Image src={src} {...imageSizeProps} />
      </Box>
    );
  } else {
    return (
      <Box position="absolute" bottom={yPos} left={xPos}>
        <Image src={src} {...imageSizeProps} />
      </Box>
    );
  }
};

export default ImageRandomPosition;
