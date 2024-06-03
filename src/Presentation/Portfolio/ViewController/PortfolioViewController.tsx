import React, { useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";

import { Images } from "../../../Common/Enum/Assets/Images";
import { Colors } from "../../../Common/Enum/Assets/Colors";
import { AspectRatio } from "../../../Common/Interface/AspectRatio";

import Loader from "../../Common/Loader/Loader";
import LeftLiftData from "./CraneLiftData/LeftLiftData";
import RightLiftData from "./CraneLiftData/RightLiftData";

import { PortfolioViewModel } from "../ViewModel/PortfolioViewModel";

import useWindowDimension from "../../../Common/Utils/useWindowDimension";

const PortfolioViewController: React.FC = () => {
  const portfolioVM = PortfolioViewModel();
  const { width } = useWindowDimension();

  useEffect(() => {
    portfolioVM.requestPortfolioList();
  }, []);

  const isLoading = portfolioVM.getIsLoading();
  const portfolioList = portfolioVM.getPortfolioList() ?? [];

  useEffect(() => {
    if (portfolioList.length > 0) {
      window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [portfolioList]);

  if (isLoading) return <Loader />;

  return (
    <Box w="100%" height={`${getWebHeight(width, portfolioList.length)}em`} bg={Colors.blue} display="flex" justifyContent="center">
      {/* Land */}
      <Box w="100%" bg="green" height={[16, null, 20, null, 24]} sx={{ position: "absolute", bottom: 0 }}></Box>

      {/* Crane Skeleton */}
      {Array.from({ length: portfolioList.length * 5.4 }).map((_, index) => {
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
      })}

      {/* Crane Lift */}
      {Array.from({ length: portfolioList.length }).map((_, index) => {
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
      })}

      {/* Crane Left Lift Data */}
      {portfolioList.map((data, index) => {
        return (
          <Box
            p={2}
            key={index}
            display="flex"
            flexDirection="row"
            position="absolute"
            justifyContent="center"
            height={CRANE_LIFT_HEIGHT}
            left={[15, null, 100, null, 260]}
            bottom={[
              (index + 1) * CRANE_LIFT_ASPECT_RATIO.small.height + (index + 1) * 60,
              null,
              (index + 1) * CRANE_LIFT_ASPECT_RATIO.med.height + (index + 1) * 80,
              null,
              (index + 1) * CRANE_LIFT_ASPECT_RATIO.big.height + (index + 1) * 100,
            ]}>
            <LeftLiftData data={data} />
          </Box>
        );
      })}

      {/* Crane Right Lift Data */}
      {portfolioList.map((data, index) => {
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
            ]}>
            <RightLiftData data={data} />
          </Box>
        );
      })}

      {/* Crane Head */}
      <Box position="absolute" bottom={[portfolioList.length * 270, null, portfolioList.length * 398, null, portfolioList.length * 504]}>
        <Image src={Images.ic_crane_head} w={CRANE_HEAD_WIDTH} h={CRANE_HEAD_HEIGHT} />
      </Box>
    </Box>
  );
};

export default PortfolioViewController;

function getWebHeight(width: number, multiplier: number) {
  if (width < 768) {
    return multiplier * 20;
  } else if (width < 1280) {
    return multiplier * 30;
  } else {
    return multiplier * 40;
  }
}

// * ================================================================
// * CRANE SKELETON
// * ================================================================
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

// * ================================================================
// * CRANE LIFT
// * ================================================================
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

// * ================================================================
// * CRANE HEAD
// * ================================================================
const CRANE_HEAD_ASPECT_RATIO: AspectRatio = {
  small: { width: 300, height: 100 },
  med: { width: 600, height: 200 },
  big: { width: 1400, height: 500 },
};

const CRANE_HEAD_HEIGHT = [CRANE_HEAD_ASPECT_RATIO.small.height, null, CRANE_HEAD_ASPECT_RATIO.med.height, null, CRANE_HEAD_ASPECT_RATIO.big.height];

const CRANE_HEAD_WIDTH = [CRANE_HEAD_ASPECT_RATIO.small.width, null, CRANE_HEAD_ASPECT_RATIO.med.width, null, CRANE_HEAD_ASPECT_RATIO.big.width];
