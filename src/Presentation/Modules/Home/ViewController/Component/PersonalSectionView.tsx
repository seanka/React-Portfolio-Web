import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { DataSection } from "../../../../../Domain/Entities/Home/Home";

interface props {
  data: DataSection;
}

export const PersonalSectionView: React.FC<props> = (props) => {
  const { data } = props;

  return (
    // In default screen (small) layout :
    // icons
    // title
    // value

    // In larger screen layout :
    // icons1 - title
    // icons1 - value

    <Box className="my-2 flex flex-col items-center md:flex-row">
      <Text className="text-3xl md:text-4xl">{data.icon}</Text>

      <Box className="items-center justify-center md:ml-4 md:flex-col">
        <Text className="font-sfpro text-center text-xs font-semibold text-white md:text-left md:text-sm">
          {data.title}
        </Text>
        <Text className="font-sfpro text-center text-2xl font-bold text-white md:text-left md:text-4xl">
          {data.value}
        </Text>
      </Box>
    </Box>
  );
};
