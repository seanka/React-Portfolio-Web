import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Work } from "../../../../../Domain/Entities/About/Work";
import { BaseResponse } from "../../../../../Domain/Entities/Core/BaseResponse";

import { WorkExpView } from "../../../About/ViewController/Component/WorkExpView";

interface props {
  data: BaseResponse<Work>[];
}

const MotionBox = motion(Box);

export const WorkExpBentoCard: React.FC<props> = ({ data }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      className="col-span-12 md:col-span-7 rounded-2xl bg-[#2A2A2A] p-5 md:p-6"
    >
      <Text className="font-sfpro mb-2 text-lg font-black text-white">
        Work Experience
      </Text>

      <WorkExpView data={data} />
    </MotionBox>
  );
};
