import React from "react";
import parse from "html-react-parser";
import { Box, Text } from "@chakra-ui/react";

import { Portfolio } from "../../../../../Domain/Entities/Portfolio/Portfolio";

import { useWindowDimension } from "../../../../../Common/Utils/useWindowDimension";

import LiftImagesContainer from "./LiftImagesContainer";

import { PortfolioViewModel } from "../../../ViewModel/PortfolioViewModel";

interface props {
  data: Portfolio;
  portfolioVM: ReturnType<typeof PortfolioViewModel>;
}

const RightLiftData: React.FC<props> = (props) => {
  const { data, portfolioVM } = props;

  const { width } = useWindowDimension();

  return (
    <Box
      width={width / 3 - 10}
      justifyContent="center"
      alignItems="flex-start"
      display="flex"
      flexDirection="column"
    >
      <Box flexDirection="row" display="flex">
        <LiftImagesContainer data={data} portfolioVM={portfolioVM} />
      </Box>

      <Box marginLeft={BOX_DESCRIPTION_LEFT_MARGIN} marginTop={1}>
        <Text as="span" fontSize={FONT_DESCRIPTION_SIZE}>
          {parse(data.briefDesc!)}
        </Text>
      </Box>
    </Box>
  );
};

export default RightLiftData;

const FONT_DESCRIPTION_SIZE = [8, null, 12, null, 16];

const BOX_DESCRIPTION_LEFT_MARGIN = [2, null, 3, null, 4];
