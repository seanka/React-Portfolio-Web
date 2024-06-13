import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

import { Colors } from "../../../Common/Enum/Assets/Colors";

import { PortfolioViewModel } from "../ViewModel/PortfolioViewModel";

import useWindowDimension from "../../../Common/Utils/useWindowDimension";
import { useElementDimension } from "../../../Common/Utils/useElementDimension";

import CraneLift from "./Crane/CraneLift";
import CraneHead from "./Crane/CraneHead";
import Loader from "../../Common/Loader/Loader";
import BirdImages from "./Decoration/BirdImages";
import CraneSkeleton from "./Crane/CraneSkeleton";
import CraneLeftLift from "./Crane/CraneLeftLift";
import CloudImages from "./Decoration/CloudImages";
import CraneRightLift from "./Crane/CraneRightLift";

const PortfolioViewController: React.FC = () => {
  const portfolioVM = PortfolioViewModel();

  const { width, height } = useWindowDimension();
  const [refContainer, dimension] = useElementDimension();

  useEffect(() => {
    portfolioVM.requestPortfolioList();
  }, []);

  const isLoading = portfolioVM.getIsLoading();
  const portfolioList = portfolioVM.getPortfolioList() ?? [];
  const isShowDecoration = portfolioVM.getIsShowDecoration();

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
    <Box
      w="100%"
      display="flex"
      ref={refContainer}
      bg={Colors.blue}
      height={`${getWebHeight(width, portfolioList.length)}em`}
      justifyContent="center">
      {/* Land */}
      <Box w="100%" bg="green" height={[16, null, 20, null, 24]} sx={{ position: "absolute", bottom: 0 }} />

      {isShowDecoration ? <CloudImages count={3} height={height} parentDimension={dimension} /> : null}

      {isShowDecoration ? <BirdImages count={6} height={height} parentDimension={dimension} /> : null}

      <CraneSkeleton portfolioLength={portfolioList.length} />

      <CraneLift portfolioLength={portfolioList.length} />

      <CraneLeftLift portfolio={portfolioList} />

      <CraneRightLift portfolio={portfolioList} />

      <CraneHead portfolioLength={portfolioList.length} />
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
