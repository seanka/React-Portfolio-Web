import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Skill } from "../../../../../Domain/Entities/About/Skill";
import { BaseResponse } from "../../../../../Domain/Entities/Core/BaseResponse";

import { TechSkillsView } from "../../../About/ViewController/Component/TechSkillsView";

interface props {
  data: BaseResponse<Skill>[];
}

const MotionBox = motion(Box);

export const TechSkillsCard: React.FC<props> = ({ data }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
      className="col-span-12 rounded-2xl bg-[#2A2A2A] p-5 md:p-6"
    >
      <Text className="font-sfpro mb-4 text-lg font-black text-white">
        Technical Skills
      </Text>

      <TechSkillsView data={data} />
    </MotionBox>
  );
};
