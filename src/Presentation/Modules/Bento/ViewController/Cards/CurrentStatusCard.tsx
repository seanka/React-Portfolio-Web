import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Work } from "../../../../../Domain/Entities/About/Work";
import { BaseResponse } from "../../../../../Domain/Entities/Core/BaseResponse";

interface props {
  currentWork: BaseResponse<Work> | undefined;
}

const MotionBox = motion(Box);

export const CurrentStatusCard: React.FC<props> = ({ currentWork }) => {
  if (!currentWork?.data) return null;

  const work = currentWork.data;
  const latestRole = work.detail?.[work.detail.length - 1];

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className="col-span-12 md:col-span-4 flex flex-col justify-center rounded-2xl bg-[#2A2A2A] p-5 md:p-6"
    >
      {/* Live badge */}
      <Box className="mb-3 flex flex-row items-center gap-x-2">
        <Box className="h-2 w-2 animate-pulse rounded-full bg-[#AF8E25]" />
        <Text className="font-sfpro text-xs font-semibold uppercase tracking-widest text-[#AF8E25]">
          Currently
        </Text>
      </Box>

      <Text className="font-sfpro text-lg font-black text-white md:text-xl">
        {latestRole?.division ?? "iOS Developer"}
      </Text>

      <Text className="font-sfpro mt-1 text-base font-semibold text-[#AF8E25]">
        @ {work.title}
      </Text>

      <Box className="mt-3 flex flex-row flex-wrap gap-x-4 gap-y-1">
        <Text className="font-sfpro text-sm font-medium text-[#939393]">
          📍 {work.location}
        </Text>
        <Text className="font-sfpro text-sm font-medium text-[#939393]">
          {latestRole?.employment}
        </Text>
        <Text className="font-sfpro text-sm font-medium text-[#939393]">
          {latestRole?.duration}
        </Text>
      </Box>
    </MotionBox>
  );
};
