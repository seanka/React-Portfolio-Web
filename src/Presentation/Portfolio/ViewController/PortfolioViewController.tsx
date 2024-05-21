import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

import { AspectRatio } from "../../../Common/Interface/AspectRatio";

import LeftLiftData from "./CraneLiftData/LeftLiftData";
import RightLiftData from "./CraneLiftData/RightLiftData";

import { PortfolioViewModel } from "../ViewModel/PortfolioViewModel";

const PortfolioViewController: React.FC = () => {
  const portfolioVM = PortfolioViewModel();

  useEffect(() => {
    portfolioVM.requestPortfolioList();
  }, []);

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

  return (
    <Box w="100%" height="110em" bg="skyblue" display="flex" justifyContent="center">
      {/* Land */}
      <Box w="100%" bg="green" height={[16, null, 20, null, 24]} sx={{ position: "absolute", bottom: 0 }}></Box>
      {/* Crane Skeleton */}
      {portfolioList.map((data, index) => {
        return (
          <Box
            bg={color[index]}
            key={index}
            height={CRANE_SKELETON_HEIGHT}
            w={CRANE_SKELETON_WIDTH}
            position="absolute"
            bottom={[
              index === 0 ? 10 : (index + 1) * CRANE_SKELETON_ASPECT_RATIO.small.height - 210,
              null,
              index === 0 ? 14 : (index + 1) * CRANE_SKELETON_ASPECT_RATIO.med.height - 294,
              null,
              index === 0 ? 24 : (index + 1) * CRANE_SKELETON_ASPECT_RATIO.big.height - 354,
              null,
            ]}
          />
        );
      })}

      {/* Crane Lift */}
      {portfolioList.map((data, index) => {
        return (
          <Box
            bg="white"
            key={index}
            height={CRANE_LIFT_HEIGHT}
            w={CRANE_LIFT_WIDTH}
            sx={{
              position: "absolute",
              bottom: [
                (index + 1) * CRANE_LIFT_ASPECT_RATIO.small.height + (index + 1) * 60,
                null,
                (index + 1) * CRANE_LIFT_ASPECT_RATIO.med.height + (index + 1) * 80,
                null,
                (index + 1) * CRANE_LIFT_ASPECT_RATIO.big.height + (index + 1) * 100,
              ],
            }}
          />
        );
        return <Box />;
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
    </Box>
  );
};

export default PortfolioViewController;

const CRANE_SKELETON_ASPECT_RATIO: AspectRatio = {
  small: { width: 100, height: 250 }, // height = width + 150
  med: { width: 150, height: 350 }, // height = width + 200
  big: { width: 200, height: 450 }, // height = width + 250
};

const CRANE_LIFT_ASPECT_RATIO: AspectRatio = {
  small: { width: 120, height: 160 },
  med: { width: 180, height: 240 },
  big: { width: 240, height: 290 },
};

const CRANE_DATA_ASPECT_RATIO: AspectRatio = {
  small: { width: 300, height: 70 },
  med: { width: 700, height: 100 },
  big: { width: 1100, height: 120 },
};

const color = ["yellow", "red", "grey"];

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

const CRANE_LIFT_HEIGHT = [CRANE_LIFT_ASPECT_RATIO.small.height, null, CRANE_LIFT_ASPECT_RATIO.med.height, null, CRANE_LIFT_ASPECT_RATIO.big.height];

const CRANE_LIFT_WIDTH = [CRANE_LIFT_ASPECT_RATIO.small.width, null, CRANE_LIFT_ASPECT_RATIO.med.width, null, CRANE_LIFT_ASPECT_RATIO.big.width];

const CRANE_DATA_WIDTH = [CRANE_DATA_ASPECT_RATIO.small.width, null, CRANE_DATA_ASPECT_RATIO.med.width, null, CRANE_DATA_ASPECT_RATIO.big.width];

// const craneLiftArchived = () => {
//   return portfolioList.map((data, index) => {
//     return (
//       <Box
//         p={2}
//         key={index}
//         bgColor="green"
//         w={CRANE_DATA_WIDTH}
//         height={CRANE_LIFT_HEIGHT}
//         display="flex"
//         flexDirection="row"
//         justifyContent="center"
//         sx={{
//           position: "absolute",
//           bottom: [
//             (index + 1) * CRANE_LIFT_ASPECT_RATIO.small.height + (index + 1) * 60,
//             null,
//             (index + 1) * CRANE_LIFT_ASPECT_RATIO.med.height + (index + 1) * 80,
//             null,
//             (index + 1) * CRANE_LIFT_ASPECT_RATIO.big.height + (index + 1) * 100,
//           ],
//         }}>
//         <LeftLiftData data={data} />
//         {/* <RightLiftData data={data} /> */}
//       </Box>
//     );
//   });
// };
