import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Work } from "../../../../Domain/Entities/About/Work";
import { BaseResponse } from "../../../../Domain/Entities/Core/BaseResponse";

import { WorkRoleRow } from "./Components/WorkRoleRow";

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
      <Text className="font-sfpro pb-4 text-lg font-black text-white">
        Work Experience
      </Text>

      <Box className="flex flex-col">
        {data.map((work, index) => {
          const w = work.data;
          if (!w) return null;
          const isLast = index === data.length - 1;

          return (
            <Box key={work.id} className="flex flex-row gap-3">
              {/* Timeline rail */}
              <Box className="flex flex-shrink-0 flex-col items-center">
                <Box className={`mt-[5px] h-2.5 w-2.5 flex-shrink-0 rounded-full ${w.currentWork ? "bg-[#AF8E25] shadow-[0_0_8px_3px_rgba(175,142,37,0.4)]" : "bg-[#444]"}`}
                />
                {!isLast && (
                  <Box className="mt-1.5 min-h-4 w-[1px] flex-1 bg-[#333]" />
                )}
              </Box>

              {/* Entry content */}
              <Box className={`min-w-0 flex-1 ${isLast ? "pb-0" : "pb-5"}`}>
                {/* Company header */}
                <Box className="flex items-start justify-between gap-2">
                  <Text className="font-sfpro text-base font-bold leading-tight text-white">
                    {w.title}
                  </Text>
                  <Text className="font-sfpro flex-shrink-0 pt-0.5 text-sm font-medium text-[#666]">
                    {w.location}
                  </Text>
                </Box>

                {/* Roles */}
                <Box className="mt-1">
                  {w.detail?.map((detail, roleIndex) => (
                    <WorkRoleRow
                      key={detail.duration}
                      detail={detail}
                      isCurrent={roleIndex === 0 && !!w.currentWork}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </MotionBox>
  );
};
