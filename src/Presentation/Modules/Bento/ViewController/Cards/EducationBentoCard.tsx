import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Education } from "../../../../../Domain/Entities/About/Education";
import { BaseResponse } from "../../../../../Domain/Entities/Core/BaseResponse";

import { EduEnum } from "../../../../../Common/Enum/About/EduEnum";
import { FormalEducationCard } from "../../../About/ViewController/Component/EducationComponent/FormalEducationCard";
import { InformalEducationCard } from "../../../About/ViewController/Component/EducationComponent/InformalEducationCard";

interface props {
  data: BaseResponse<Education>[];
}

const MotionBox = motion(Box);

export const EducationBentoCard: React.FC<props> = ({ data }) => {
  const [certsExpanded, setCertsExpanded] = useState(false);

  const formalSection = data.find((s) => s.id === EduEnum.FORMAL);
  const informalSection = data.find((s) => s.id === EduEnum.INFORMAL);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
      className="col-span-12 md:col-span-5 rounded-2xl bg-[#2A2A2A] p-5 md:p-6"
    >
      <Text className="font-sfpro mb-3 text-lg font-black text-white">
        Education
      </Text>

      {/* Formal Education */}
      {formalSection?.data?.listData?.map((item) => (
        <FormalEducationCard key={item.position} data={item} />
      ))}

      {/* Certifications - collapsible */}
      {informalSection && (
        <>
          <Box
            onClick={() => setCertsExpanded(!certsExpanded)}
            className="mt-2 flex cursor-pointer flex-row items-center justify-between rounded-lg bg-[#1E1E1E] px-3 py-2"
          >
            <Text className="font-sfpro text-sm font-semibold text-white">
              {informalSection.data?.title ?? "Certifications"}
            </Text>
            <Text className="font-sfpro text-xl font-bold text-[#AF8E25]">
              {certsExpanded ? "−" : "+"}
            </Text>
          </Box>

          {certsExpanded && (
            <Box className="mt-3 max-h-64 overflow-y-scroll pr-1">
              {informalSection.data?.listData?.map((item) => {
                if (!item.published) return null;
                return (
                  <InformalEducationCard
                    key={item.position}
                    data={item as any}
                  />
                );
              })}
            </Box>
          )}
        </>
      )}
    </MotionBox>
  );
};
