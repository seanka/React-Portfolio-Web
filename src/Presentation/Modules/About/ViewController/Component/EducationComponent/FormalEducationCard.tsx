import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { EducationData } from "../../../../../../Domain/Entities/About/Education";

interface props {
  data: EducationData;
}

export const FormalEducationCard: React.FC<props> = (props) => {
  const { data } = props;

  return (
    <Box className="mx-0.5 mt-1 mb-4 flex flex-col">
      {/* Title Section */}
      <Box className="flex flex-row items-end">
        <Image
          alt={data.image?.alt}
          src={data.image?.image}
          className="mr-1 w-8 rounded-lg"
        />
        <Text className="font-sfpro text-base font-bold text-white">
          {data.organization}
        </Text>
      </Box>

      {/* Content */}
      <Box className="flex flex-row pt-0.5">
        <Text className="font-sfpro text-sm font-semibold text-white">
          {data.field}&nbsp;|&nbsp;
        </Text>
        <Text className="font-sfpro text-sm font-semibold text-white">
          {data.grade}
        </Text>
      </Box>

      <Text className="font-sfpro text-sm font-medium text-white">
        {data.duration}
      </Text>

      {data.description?.map((item, index) => (
        <Text
          key={index}
          className="font-sfpro px-2 py-0.5 text-justify text-sm text-white"
        >
          ⏺ {item}
        </Text>
      ))}
    </Box>
  );
};
