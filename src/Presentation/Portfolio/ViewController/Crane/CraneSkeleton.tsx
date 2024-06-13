import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { Images } from "../../../../Common/Enum/Assets/Images";

import { AspectRatio } from "../../../../Common/Interface/AspectRatio";

interface props {
  portfolioLength: number;
}

const CraneSkeleton: React.FC<props> = (props) => {
  const { portfolioLength } = props;

  return Array.from({ length: portfolioLength * 5.4 }).map((_, index) => {
    return (
      <Box
        key={index}
        position="absolute"
        bottom={[
          index === 0 ? 16 : (index + 1) * CRANE_SKELETON_ASPECT_RATIO.small.height + 10,
          null,
          index === 0 ? 20 : (index + 1) * CRANE_SKELETON_ASPECT_RATIO.med.height + 5,
          null,
          index === 0 ? 24 : (index + 1) * CRANE_SKELETON_ASPECT_RATIO.big.height - 5,
          null,
        ]}>
        <Image src={Images.ic_crane_skeleton} w={CRANE_SKELETON_WIDTH} h={CRANE_SKELETON_HEIGHT} />
      </Box>
    );
  });
};

export default CraneSkeleton;

const CRANE_SKELETON_ASPECT_RATIO: AspectRatio = {
  small: { width: 50, height: 50 }, // height = width + 150
  med: { width: 75, height: 75 }, // height = width + 200
  big: { width: 100, height: 100 }, // height = width + 250
};

const CRANE_SKELETON_HEIGHT = [
  CRANE_SKELETON_ASPECT_RATIO.small.height,
  null,
  CRANE_SKELETON_ASPECT_RATIO.med.height,
  null,
  CRANE_SKELETON_ASPECT_RATIO.big.height,
];

const CRANE_SKELETON_WIDTH = [
  CRANE_SKELETON_ASPECT_RATIO.small.width,
  null,
  CRANE_SKELETON_ASPECT_RATIO.med.width,
  null,
  CRANE_SKELETON_ASPECT_RATIO.big.width,
];
