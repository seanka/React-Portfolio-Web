import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { Work } from "../../../../../Domain/Entities/About/Work";
import { BaseResponse } from "../../../../../Domain/Entities/Core/BaseResponse";

import { WorkExperienceCard } from "./WorkExpComponent/WorkExpCard";

interface props {
  data: BaseResponse<Work>[];
}

export const WorkExpView: React.FC<props> = (props) => {
  const { data } = props;

  return (
    <Box className="mt-3 flex flex-row items-start overflow-x-scroll md:px-5">
      {data.map((work, index) => {
        const firstItem = index === 0;
        const middleItem = index > 0 && index + 1 !== data.length;
        const lastItem = index === data.length - 1;

        return (
          <Box key={work.id} className="flex h-full flex-row items-center">
            {/* Dash before card */}
            {(middleItem || lastItem) && (
              <Text className="self-center text-lg font-extrabold whitespace-nowrap text-[#939393]">
                &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
            )}

            {work && work.data && <WorkExperienceCard data={work.data} />}

            {/* Dash after card */}
            {(middleItem || firstItem) && (
              <Text className="self-center text-lg font-extrabold whitespace-nowrap text-[#939393]">
                &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;
              </Text>
            )}
          </Box>
        );
      })}
    </Box>
  );
};
