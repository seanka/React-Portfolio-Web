import React from "react";
import parse from "html-react-parser";
import { Box, Text } from "@chakra-ui/react";

import { Portfolio } from "../../../../../Domain/Entities/Portfolio";

import useWindowDimension from "../../../../../Common/Utils/useWindowDimension";

import ImageList from "./Images/ImageList";

interface props {
  data: Portfolio;
}

const RightLiftData: React.FC<props> = (props) => {
  const { data } = props;

  const { width } = useWindowDimension();

  return (
    <Box width={width / 3 - 10} justifyContent="center" alignItems="flex-start" display="flex" flexDirection="column">
      <Box flexDirection="row" display="flex">
        <ImageList title={data.title!} images={data.images!} description={data.description!} />
      </Box>

      <Box>
        <Text noOfLines={4} fontSize={FONT_DESCRIPTION_SIZE}>
          {parse(data.description!)}
        </Text>
      </Box>
    </Box>
  );
};

export default RightLiftData;

const FONT_DESCRIPTION_SIZE = [8, null, 12, null, 16];
