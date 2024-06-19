import React from "react";

import { Images } from "../../../../Common/Enum/Assets/Images";
import { Dimension } from "../../../../Common/Interface/Dimension";
import { BoxAspectRatio } from "../../../../Common/Interface/AspectRatio";

import ImageRandomPosition from "../../../Common/ImageRandomPosition/ImageRandomPosition";

interface props {
  count: number;
  height: number;
  parentDimension: Dimension;
}

const BirdImages: React.FC<props> = (props) => {
  const { count, height, parentDimension } = props;

  return Array.from({ length: count }).map((_, i) => {
    const image = getRandomBirdImage();

    return (
      <ImageRandomPosition
        src={image}
        multiplier={i / 1.75}
        minX={10}
        maxX={parentDimension.width - 10}
        minY={height + i * 100}
        maxY={parentDimension.height}
        imageSize={PIC_SIZE}
      />
    );
  });
};

export default BirdImages;

function getRandomBirdImage(): string {
  const random = Math.floor(Math.random() * 4) + 1;
  const key = `ic_bird_${random}` as keyof typeof Images;
  const image = Images[key];

  return image;
}

const PIC_ASPECT_RATIO: BoxAspectRatio = {
  small: { size: 38 },
  med: { size: 58 },
  big: { size: 78 },
};

const PIC_SIZE = [PIC_ASPECT_RATIO.small.size, null, PIC_ASPECT_RATIO.med.size, null, PIC_ASPECT_RATIO.big.size];
