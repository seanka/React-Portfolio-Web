import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { Images } from "../../../../Common/Enum/Assets/Images";

import { AspectRatio } from "../../../../Common/Interface/AspectRatio";

interface props {
  portfolioLength: number;
}

const CraneHead: React.FC<props> = (props) => {
  const { portfolioLength } = props;

  return (
    <Box position="absolute" bottom={[portfolioLength * 270, null, portfolioLength * 398, null, portfolioLength * 504]}>
      <Image src={Images.ic_crane_head} w={CRANE_HEAD_WIDTH} h={CRANE_HEAD_HEIGHT} />
    </Box>
  );
};

export default CraneHead;

const CRANE_HEAD_ASPECT_RATIO: AspectRatio = {
  small: { width: 300, height: 100 },
  med: { width: 600, height: 200 },
  big: { width: 1400, height: 500 },
};

const CRANE_HEAD_HEIGHT = [CRANE_HEAD_ASPECT_RATIO.small.height, null, CRANE_HEAD_ASPECT_RATIO.med.height, null, CRANE_HEAD_ASPECT_RATIO.big.height];

const CRANE_HEAD_WIDTH = [CRANE_HEAD_ASPECT_RATIO.small.width, null, CRANE_HEAD_ASPECT_RATIO.med.width, null, CRANE_HEAD_ASPECT_RATIO.big.width];
