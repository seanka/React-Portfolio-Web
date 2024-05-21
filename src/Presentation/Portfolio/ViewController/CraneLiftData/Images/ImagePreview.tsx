import React from "react";
import { Image } from "@chakra-ui/react";

import { BoxAspectRatio } from "../../../../../Common/Interface/AspectRatio";
import { ImageProperty } from "../../../../../Common/Interface/ImageProperty";

interface props {
  index: number;
  onOpen: (index: number) => void;
  image: ImageProperty;
}

const ImagePreview: React.FC<props> = (props) => {
  const { index, onOpen, image } = props;

  return (
    <Image
      onClick={() => onOpen(index)}
      key={index}
      alt={image.alt}
      marginRight={2}
      src={image.image}
      objectFit="cover"
      boxSize={PIC_SIZE}
      borderRadius={PIC_BORDER_RADIUS}
    />
  );
};

export default ImagePreview;

const PIC_ASPECT_RATIO: BoxAspectRatio = {
  small: { size: 10, borderRad: 4 },
  med: { size: 20, borderRad: 6 },
  big: { size: 40, borderRad: 8 },
};

const PIC_SIZE = [PIC_ASPECT_RATIO.small.size, null, PIC_ASPECT_RATIO.med.size, null, PIC_ASPECT_RATIO.big.size];

const PIC_BORDER_RADIUS = [PIC_ASPECT_RATIO.small.borderRad!, null, PIC_ASPECT_RATIO.med.borderRad!, null, PIC_ASPECT_RATIO.big.borderRad!];
