import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { Portfolio } from "../../../../Domain/Entities/Portfolio";

import useWindowDimension from "../../../../Common/Utils/useWindowDimension";

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
        <ImageList images={data.images!} description={data.description!} />

        <Text>{data.images?.length}</Text>
      </Box>

      <Box>
        <Text noOfLines={4}>{data.description}</Text>
      </Box>
    </Box>
  );
};

export default RightLiftData;
