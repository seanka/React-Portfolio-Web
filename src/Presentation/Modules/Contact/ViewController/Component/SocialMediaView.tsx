import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { ContactData } from "../../../../../Domain/Entities/Contact/Contact";

interface props {
  data: ContactData;
}

export const SocialMediaView: React.FC<props> = (props) => {
  const { data } = props;

  return (
    <Box
      border="1px"
      borderColor="#AF8E25"
      onClick={() => window.open(data.link ?? "", "_blank")}
      className="group flex flex-row items-center justify-center rounded-lg py-3 pr-2 pl-3 hover:cursor-pointer"
    >
      <Image src={data.icon} className="mr-2 w-7" />

      <Text className="font-sfpro text-base font-semibold text-white md:text-xl">
        {data.platform}
      </Text>

      {/* Show arrow icon on hover */}
      <Text className="font-sfpro hidden text-xl font-semibold text-white group-hover:inline-block">
        ↗️
      </Text>
    </Box>
  );
};
