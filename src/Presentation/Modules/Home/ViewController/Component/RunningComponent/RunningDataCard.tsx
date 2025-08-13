import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

import { RunningData } from "../../../../../../Domain/Entities/Home/HomeRunning";
import { RunningAnnualDataCard } from "./RunningAnnualDataCard";

interface props {
  data: RunningData[];
}

export const RunningDataCard: React.FC<props> = (props) => {
  const { data } = props;

  const [ActiveYear, setActiveYear] = useState<number>(data.length - 1);

  return (
    <Box className="flex flex-row items-center">
      {/* Annual List */}
      <Box className="flex flex-col items-center">
        <Text
          className="text-white hover:cursor-pointer"
          onClick={() => {
            if (ActiveYear === 0) return;
            setActiveYear(ActiveYear - 1);
          }}
        >
          ⬆
        </Text>

        <Box className="my-2 min-w-[60px] md:my-3 md:min-w-[72px]">
          {data?.map((annual, index) => {
            const annualActive = index == ActiveYear;

            return (
              <Box
                className="my-1"
                key={annual.title}
                onClick={() => {
                  if (annualActive) return;
                  setActiveYear(index);
                }}
              >
                <Text
                  className={`text-center transition-normal duration-200 ${annualActive ? "text-xl font-extrabold text-[#AF8E25] md:text-2xl" : "text-xs font-semibold text-white md:text-sm"} hover:cursor-pointer`}
                >
                  {annual.title}
                </Text>
              </Box>
            );
          })}
        </Box>

        <Text
          className="text-white hover:cursor-pointer"
          onClick={() => {
            if (ActiveYear === data.length - 1) return;
            setActiveYear(ActiveYear + 1);
          }}
        >
          ⬇
        </Text>
      </Box>

      {/* Annual Data */}
      <RunningAnnualDataCard data={data[ActiveYear]} />
    </Box>
  );
};
