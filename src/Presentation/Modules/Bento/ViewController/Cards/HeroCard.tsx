import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { HomeIntroduction } from "../../../../../Domain/Entities/Home/HomeIntroduction";

interface props {
  data: HomeIntroduction;
}

const MotionBox = motion(Box);

export const HeroCard: React.FC<props> = ({ data }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="col-span-12 md:col-span-4 md:row-span-2 flex flex-col justify-between rounded-2xl bg-[#2A2A2A] p-5"
    >
      {/* Cover Photo */}
      <Box className="flex justify-center">
        <Image
          src={data.coverImage}
          alt={data.greeting}
          className="w-40 rounded-2xl object-cover md:w-80"
        />
      </Box>

      {/* Name + Divider */}
      <Box className="mt-4">
        <Text className="font-sfpro text-2xl font-black text-white">{data.greeting}</Text>
        <Box className="mt-1.5 h-[1px] w-full bg-[#AF8E25]" />
      </Box>

      {/* Personal Facts */}
      <Box className="mt-3 flex flex-col gap-y-2">
        {data.demographic?.map((item) => (
          <Box key={item.title} className="flex flex-row items-center gap-x-2">
            <Text className="text-lg">{item.icon}</Text>
            <Box>
              <Text className="font-sfpro text-[10px] font-medium text-[#939393]">
                {item.title}
              </Text>
              <Text className="font-sfpro text-sm font-semibold text-white">
                {item.value}
              </Text>
            </Box>
          </Box>
        ))}

        {data.interest?.map((item) => (
          <Box key={item.title} className="flex flex-row items-center gap-x-2">
            <Text className="text-lg">{item.icon}</Text>
            <Box>
              <Text className="font-sfpro text-[10px] font-medium text-[#939393]">
                {item.title}
              </Text>
              <Text className="font-sfpro text-sm font-semibold text-white">
                {item.value}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </MotionBox>
  );
};
