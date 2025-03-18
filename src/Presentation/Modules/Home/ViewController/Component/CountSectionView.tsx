import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { DataSection } from "../../../../../Domain/Entities/Home/Home";

interface props {
  data: DataSection;
}

export const CountSectionView: React.FC<props> = (props) => {
  const { data } = props;

  return (
    // In default screen (small) layout :
    // icons
    // title
    // value

    // In larger screen layout :
    // icons1 - title
    // icons1 - value

    <Box className="my-2 flex flex-col items-center justify-end md:flex-row">
      <Box className="order-2 justify-center md:order-none md:mr-4 md:flex-col md:justify-end">
        <Text className="font-sfpro order-2 text-center text-2xl font-bold text-white md:order-none md:text-right md:text-4xl">
          {data.value}
        </Text>
        <Text className="font-sfpro order-1 text-center text-xs font-semibold text-white md:order-none md:text-sm">
          {data.title}
        </Text>
      </Box>

      <Text className="order-1 text-3xl md:order-none md:text-4xl">
        {data.icon}
      </Text>
    </Box>
  );
};
