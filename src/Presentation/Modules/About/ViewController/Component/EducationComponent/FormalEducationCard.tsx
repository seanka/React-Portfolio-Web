import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { EducationSchool } from "../../../../../../Domain/Entities/About/Education";

interface props {
  data: EducationSchool;
}

export const FormalEducationCard: React.FC<props> = (props) => {
  const { data } = props;

  return (
    <Box className="mt-1 mb-3 flex flex-col">
      {/* Title Section */}
      <Box className="flex flex-row items-end">
        <Image
          src={data.image?.image}
          alt={data.image?.alt}
          className="mr-1 w-8 rounded-lg"
        />
        <Text className="font-sfpro text-sm font-bold text-white">
          {data.organization}
        </Text>
      </Box>

      {/* Content */}
      <Box className="mt-0.5 flex flex-row">
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

      {data.descriptions?.map((item, index) => (
        <Text key={index} className="font-sfpro text-sm text-white">
          ⏺ {item}
        </Text>
      ))}
    </Box>
  );
};
