import React from "react";
import { Image } from "@chakra-ui/react";

import { ImageProperty } from "../../../../Domain/Entities/Image";

import { BoxAspectRatio } from "../../../../Common/Interface/AspectRatio";

interface props {
  images: ImageProperty[];
}

const ImagePreview: React.FC<props> = (props) => {
  const { images } = props;

  return images.map((image, index) => {
    return (
      <Image key={index} alt={image.alt} marginRight={2} src={image.image} objectFit="cover" boxSize={PIC_SIZE} borderRadius={PIC_BORDER_RADIUS} />
    );
  });
};

export default ImagePreview;

const PIC_ASPECT_RATIO: BoxAspectRatio = {
  small: { size: 10, borderRad: 4 },
  med: { size: 20, borderRad: 6 },
  big: { size: 40, borderRad: 8 },
};

const PIC_SIZE = [PIC_ASPECT_RATIO.small.size, null, PIC_ASPECT_RATIO.med.size, null, PIC_ASPECT_RATIO.big.size];

const PIC_BORDER_RADIUS = [PIC_ASPECT_RATIO.small.borderRad!, null, PIC_ASPECT_RATIO.med.borderRad!, null, PIC_ASPECT_RATIO.big.borderRad!];
