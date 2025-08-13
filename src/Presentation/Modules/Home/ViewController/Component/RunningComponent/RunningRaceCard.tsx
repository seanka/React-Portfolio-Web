import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { RunningRace } from "../../../../../../Domain/Entities/Home/HomeRunning";

interface props {
  data: RunningRace;
  oddData: boolean;
  dataExpanded: boolean;
  onClickData: () => void;
  onClickImage: (image: string) => void;
}

export const RunningRaceCard: React.FC<props> = (props) => {
  const { data, dataExpanded, oddData, onClickData, onClickImage } = props;

  return (
    <Box key={data.title} className="mb-4 flex flex-col">
      <Box
        onClick={onClickData}
        className={`flex flex-row items-center justify-end ${oddData ? "md:justify-start" : "md:justify-end"} `}
      >
        {/* Expand Collapse Button for larger screen - respects oddData */}
        {oddData && (
          <Text
            className={`hidden pr-2.5 text-xl font-extrabold text-white md:block`}
          >
            {dataExpanded ? "-" : "+"}
          </Text>
        )}

        {/* Title and Statistics */}
        <Box className="flex flex-col">
          {/* Title */}
          <Text
            className={`text-right text-lg font-extrabold text-white md:text-xl ${oddData ? "md:text-left" : "md:text-right"}`}
          >
            {data.title}
          </Text>

          {/* Statistics */}
          <Text
            className={`text-right text-xs font-semibold text-white md:text-sm ${oddData ? "md:text-left" : "md:text-right"}`}
          >
            📍 {data.location} · 🥇 {data.category} · ⏱️ {data.time}
          </Text>
        </Box>

        {/* Expand Collapse Button for larger screen - respects oddData */}
        {!oddData && (
          <Text
            className={`hidden pl-2.5 text-xl font-extrabold text-white md:block`}
          >
            {dataExpanded ? "-" : "+"}
          </Text>
        )}

        {/* Expand Collapse Button only for small screen - ignore oddData */}
        <Text className={`pl-2 text-xl font-extrabold text-white md:hidden`}>
          {dataExpanded ? "-" : "+"}
        </Text>
      </Box>

      {/* Pictures */}
      {dataExpanded && (
        <Box
          className={`mt-1 mr-5 flex flex-row justify-end gap-x-1 md:mt-2.5 ${oddData ? "md:ml-5 md:justify-start" : "md:mr-5 md:justify-end"} hover:cursor-pointer`}
        >
          {data.image?.map((image) => (
            <Image
              key={image.alt}
              alt={image.alt}
              src={image.image}
              onClick={() => onClickImage(image.image)}
              className="max-h-10 max-w-10 rounded-md"
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
