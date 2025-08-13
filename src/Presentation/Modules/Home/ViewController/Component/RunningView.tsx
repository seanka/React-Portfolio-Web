import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { HomeRunning } from "../../../../../Domain/Entities/Home/HomeRunning";

import { RunningDataCard } from "./RunningComponent/RunningDataCard";

import NumberExtension from "../../../../../Common/Core/Utils/NumberExtension";

interface props {
  data: HomeRunning;
}

export const RunningView: React.FC<props> = (props) => {
  const { data } = props;

  return (
    <Box className="flex h-full flex-col items-center justify-center">
      {/* Headline Section
      ####################
      Small screen layout
      title 1
      data 1
      title 2
      data 2
      ####################
      Larger screen layout
      title1          title2
      data1           data2 */}
      {data.accumulation && (
        <Box className="flex w-full flex-col md:flex-row md:justify-around">
          {/* Total Distance */}
          <Box className="mb-5 md:mb-0">
            <Text className="font-sfpro text-center text-base font-semibold text-white md:text-lg">
              Been Running for
            </Text>
            <Text className="font-sfpro text-center text-2xl font-extrabold text-white md:text-3xl">
              🏁 {NumberExtension.Format(data.accumulation.distance ?? 0)}km
            </Text>
          </Box>

          {/* Total Steps */}
          <Box>
            <Text className="font-sfpro text-center text-base font-semibold text-white md:text-lg">
              with Total of
            </Text>
            <Text className="font-sfpro text-center text-2xl font-extrabold text-white md:text-3xl">
              👣 {NumberExtension.Format(data.accumulation.step ?? 0)} steps
            </Text>
          </Box>
        </Box>
      )}

      {/* Separator */}
      <Box className="my-8 h-[1px] w-[80%] bg-[#939393] md:my-10" />

      {/* Content */}
      <Box className="w-[95%] md:w-[74%]">
        {data.listData && <RunningDataCard data={data.listData} />}
      </Box>
    </Box>
  );
};
