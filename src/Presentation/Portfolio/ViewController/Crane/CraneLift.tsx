import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { Images } from "../../../../Common/Enum/Assets/Images";

import { AspectRatio } from "../../../../Common/Interface/AspectRatio";

interface props {
  portfolioLength: number;
}

const CraneLift: React.FC<props> = (props) => {
  const { portfolioLength } = props;

  return Array.from({ length: portfolioLength }).map((_, index) => {
    return (
      <Box
        key={index}
        position="absolute"
        h={CRANE_LIFT_HEIGHT}
        w={CRANE_LIFT_WIDTH}
        bottom={[
          (index + 1) * CRANE_LIFT_ASPECT_RATIO.small.height + index * 60,
          null,
          (index + 1) * CRANE_LIFT_ASPECT_RATIO.med.height + index * 80,
          null,
          (index + 1) * CRANE_LIFT_ASPECT_RATIO.big.height + index * 100,
        ]}>
        <Image src={Images.ic_crane_lift} w={CRANE_LIFT_IC_WIDTH} h={CRANE_LIFT_IC_HEIGHT} />
      </Box>
    );
  });
};

export default CraneLift;

const CRANE_LIFT_ASPECT_RATIO: AspectRatio = {
  small: { width: 120, height: 160 },
  med: { width: 180, height: 240 },
  big: { width: 240, height: 290 },
};

const CRANE_LIFT_IC_ASPECT_RATIO: AspectRatio = {
  small: { width: 55, height: 65 },
  med: { width: 90, height: 100 },
  big: { width: 110, height: 120 },
};

const CRANE_LIFT_HEIGHT = [CRANE_LIFT_ASPECT_RATIO.small.height, null, CRANE_LIFT_ASPECT_RATIO.med.height, null, CRANE_LIFT_ASPECT_RATIO.big.height];

const CRANE_LIFT_WIDTH = [CRANE_LIFT_ASPECT_RATIO.small.width, null, CRANE_LIFT_ASPECT_RATIO.med.width, null, CRANE_LIFT_ASPECT_RATIO.big.width];

const CRANE_LIFT_IC_HEIGHT = [
  CRANE_LIFT_IC_ASPECT_RATIO.small.height,
  null,
  CRANE_LIFT_IC_ASPECT_RATIO.med.height,
  null,
  CRANE_LIFT_IC_ASPECT_RATIO.big.height,
];

const CRANE_LIFT_IC_WIDTH = [
  CRANE_LIFT_IC_ASPECT_RATIO.small.width,
  null,
  CRANE_LIFT_IC_ASPECT_RATIO.med.width,
  null,
  CRANE_LIFT_IC_ASPECT_RATIO.big.width,
];
