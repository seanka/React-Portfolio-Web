import React from "react";

import { Images } from "../../../../Common/Enum/Assets/Images";
import { Dimension } from "../../../../Common/Interface/Dimension";
import { AspectRatio } from "../../../../Common/Interface/AspectRatio";

import ImageRandomPosition from "../../../Common/ImageRandomPosition/ImageRandomPosition";

interface props {
  count: number;
  height: number;
  parentDimension: Dimension;
}

const CloudImages: React.FC<props> = (props) => {
  const { count, height, parentDimension } = props;

  return Array.from({ length: count }).map((_, i) => {
    return (
      <ImageRandomPosition
        src={Images.ic_cloud}
        multiplier={i * 1.5}
        minX={10}
        maxX={parentDimension.width - 10}
        minY={height + i * 100}
        maxY={parentDimension.height}
        imageWidth={PIC_WIDTH}
        imageHeight={PIC_HEIGHT}
      />
    );
  });
};

export default CloudImages;

const PIC_ASPECT_RATIO: AspectRatio = {
  small: { width: 100, height: 50 },
  med: { width: 150, height: 75 },
  big: { width: 200, height: 100 },
};

const PIC_HEIGHT = [PIC_ASPECT_RATIO.small.height, null, PIC_ASPECT_RATIO.med.height, null, PIC_ASPECT_RATIO.big.height];

const PIC_WIDTH = [PIC_ASPECT_RATIO.small.width, null, PIC_ASPECT_RATIO.med.width, null, PIC_ASPECT_RATIO.big.width];
