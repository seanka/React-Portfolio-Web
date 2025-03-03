import React from "react";
import { Box } from "@chakra-ui/react";

import { Portfolio } from "../../../../Domain/Entities/Portfolio/Portfolio";

import { AspectRatio } from "../../../../Common/Interface/AspectRatio";

import RightLiftData from "./LiftData/RightLiftData";

import { PortfolioViewModel } from "../../ViewModel/PortfolioViewModel";
interface props {
  portfolio: Portfolio[];
  portfolioVM: ReturnType<typeof PortfolioViewModel>;
}
const CraneRightLift: React.FC<props> = (props) => {
  const { portfolio, portfolioVM } = props;

  return portfolio.map((data, index) => {
    return (
      <Box
        p={2}
        key={index}
        display="flex"
        flexDirection="row"
        position="absolute"
        justifyContent="center"
        height={CRANE_LIFT_HEIGHT}
        right={[0, null, 10, null, 100]}
        bottom={[
          (index + 1) * CRANE_LIFT_ASPECT_RATIO.small.height + (index + 1) * 60,
          null,
          (index + 1) * CRANE_LIFT_ASPECT_RATIO.med.height + (index + 1) * 80,
          null,
          (index + 1) * CRANE_LIFT_ASPECT_RATIO.big.height + (index + 1) * 100,
        ]}
      >
        <RightLiftData data={data} portfolioVM={portfolioVM} />
      </Box>
    );
  });
};

export default CraneRightLift;

const CRANE_LIFT_ASPECT_RATIO: AspectRatio = {
  small: { width: 120, height: 160 },
  med: { width: 180, height: 240 },
  big: { width: 240, height: 290 },
};

const CRANE_LIFT_HEIGHT = [
  CRANE_LIFT_ASPECT_RATIO.small.height,
  null,
  CRANE_LIFT_ASPECT_RATIO.med.height,
  null,
  CRANE_LIFT_ASPECT_RATIO.big.height,
];
