import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { ContactData } from "../../../../../Domain/Entities/Contact/Contact";

interface props {
  data: ContactData;
}

export const ContactInformationView: React.FC<props> = (props) => {
  const { data } = props;

  return (
    <Box
      onClick={() => window.open(data.link ?? "", "_blank")}
      className="flex flex-col items-center justify-center hover:cursor-pointer"
    >
      <Image src={data.icon} className="mr-2 mb-1 w-7" />

      <Text className="font-sfpro text-sm font-semibold text-white">
        {data.value}
      </Text>
    </Box>
  );
};
