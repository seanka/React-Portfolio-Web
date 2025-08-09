import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { EduEnum } from "../../../../../Common/Enum/About/EduEnum";

import { Education } from "../../../../../Domain/Entities/About/Education";
import { BaseResponse } from "../../../../../Domain/Entities/Core/BaseResponse";

import { FormalEducationCard } from "./EducationComponent/FormalEducationCard";
import { InformalEducationCard } from "./EducationComponent/InformalEducationCard";

interface props {
  data: BaseResponse<Education>[];
}

export const EducationView: React.FC<props> = (props) => {
  const { data } = props;

  return (
    <Box className="mt-3 md:px-5">
      {data.map((section) => (
        <Box key={section.id}>
          {/* Title */}
          <Text className="font-sfpro text-base font-extrabold text-white">
            {section.data?.title}
          </Text>

          {/* Dynamic content */}
          {section.id === EduEnum.FORMAL &&
            section.data &&
            section.data.listData?.map((eduData) => (
              <FormalEducationCard key={eduData.position} data={eduData} />
            ))}

          {section.id === EduEnum.INFORMAL &&
            section.data &&
            section.data.listData?.map((eduData) => {
              if (!eduData.published) return;

              return (
                <InformalEducationCard key={eduData.position} data={eduData} />
              );
            })}
        </Box>
      ))}
    </Box>
  );
};
