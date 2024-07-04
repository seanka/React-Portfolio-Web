import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { generateRandomPosition } from "../../../Common/Utils/generateRandomPosition";

import { Dimension } from "../../../Common/Interface/Dimension";
import { ImageProperty } from "../../../Common/Interface/ImageProperty";

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
  imageCoordinates?: ImageProperty;
  isGenerateImageCoordinates: boolean;
  saveGeneratedImageCoordinate?: (value: Dimension) => void;
}

const ImageRandomPosition: React.FC<props> = (props) => {
  const {
    src,
    minX = 0,
    maxX = 0,
    minY = 0,
    maxY = 0,
    multiplier = 1,
    imageWidth,
    imageHeight,
    imageSize,
    imageCoordinates,
    isGenerateImageCoordinates,
    saveGeneratedImageCoordinate,
  } = props;

  if (minX >= maxX || minY >= maxY) {
    return;
  }

  const imageSizeProps = imageSize ? { boxSize: imageSize } : { width: imageWidth, height: imageHeight };

  if (isGenerateImageCoordinates) {
    const { xPos, yPos } = generateRandomPosition(minX, maxX, minY, maxY, multiplier);

    saveGeneratedImageCoordinate!({ bottom: yPos, right: xPos });

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
  }

  return (
    <Box position="absolute" bottom={imageCoordinates?.dimension?.bottom} right={imageCoordinates?.dimension?.right}>
      <Image src={src} {...imageSizeProps} />
    </Box>
  );
};

export default ImageRandomPosition;
