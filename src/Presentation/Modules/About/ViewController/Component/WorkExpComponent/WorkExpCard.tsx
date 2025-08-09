import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { Work } from "../../../../../../Domain/Entities/About/Work";
import { WorkExpDetail } from "./WorkExpDetail";

interface props {
  data: Work;
}

export const WorkExperienceCard: React.FC<props> = (props) => {
  const { data } = props;

  console.log(data);
  return (
    <Box
      border="1px"
      borderColor="#AF8E25"
      className={`my-2.5 w-80 rounded-xl px-6 py-3 md:px-8 md:py-5 ${
        data.currentWork ? "shadow-[0_0_14px_4px_rgba(175,142,37,0.5)]" : ""
      }`}
    >
      <Box className="flex flex-col justify-between">
        <Box>
          {/* Title */}
          <Text className="font-sfpro text-base font-bold text-white">
            {data.title}
          </Text>

          {/* Separator */}
          <Box className="mt-1 h-[1px] w-full bg-[#939393]" />

          {/* Location */}
          <Text className="font-sfpro text-right text-sm font-medium text-white">
            {data.location}
          </Text>
        </Box>

        {/* Detail */}
        <Box className="mt-5">
          {data.detail?.map((detail) => (
            <WorkExpDetail data={detail} key={detail.duration} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
