import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { HomeIntroduction } from "../../../../../Domain/Entities/Home/HomeIntroduction";

interface props {
  data: HomeIntroduction;
}

const MotionBox = motion(Box);

export const IntroTaglineCard: React.FC<props> = ({ data }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      className="col-span-12 md:col-span-6 flex flex-col justify-center rounded-2xl bg-[#2A2A2A] p-5 md:p-6"
    >
      <Text className="font-sfpro text-2xl font-black text-white md:text-3xl">
        {data.headline}
      </Text>

      <Text className="font-sfpro pt-4 text-sm font-medium leading-relaxed text-[#c0c0c0] md:text-base">
        {data.summary}
      </Text>
    </MotionBox>
  );
};
