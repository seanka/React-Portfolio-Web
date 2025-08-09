import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { WorkDetail } from "../../../../../../Domain/Entities/About/Work";

interface props {
  data: WorkDetail;
}

export const WorkExpDetail: React.FC<props> = (props) => {
  const { data } = props;

  return (
    <Box className="mt-3 mb-2 flex flex-col">
      <Box className="flex flex-row items-center justify-between">
        <Text className="font-sfpro pr-2.5 text-xs font-semibold text-white">
          {data.duration}
        </Text>

        <Text className="font-sfpro text-xs font-semibold text-white">
          {data.employment}
        </Text>
      </Box>

      <Text className="font-sfpro mt-5 text-sm font-extrabold text-white">
        {data.division}
      </Text>
    </Box>
  );
};
