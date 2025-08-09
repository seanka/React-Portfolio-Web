import React, { useState } from "react";
import { Box, Divider, Image, Text, Tooltip } from "@chakra-ui/react";

import ArrayExtension from "../../../../../../Common/Core/Utils/ArrayExtension";

import { Skill } from "../../../../../../Domain/Entities/About/Skill";

interface props {
  title: string;
  data: Skill;
}

export const TechSkillCard: React.FC<props> = (props) => {
  const { title, data } = props;

  const shuffledData = ArrayExtension.ShuffleArray(data.data ?? []);

  const [IsExpanded, setIsExpanded] = useState<boolean>(data.expanded ?? true);

  return (
    <Box key={title} className="flex flex-col">
      {/* Title Section */}
      <Box
        onClick={() => setIsExpanded(!IsExpanded)}
        className="flex flex-row items-center justify-between px-2 py-3 hover:cursor-pointer md:px-3 md:py-2"
      >
        <Text className="font-sfpro text-base font-bold text-white">
          {title}
        </Text>

        {/* Expand / Collapse Button */}
        <Text className="font-sfpro text-4xl font-bold text-[#AF8E25]">
          {IsExpanded ? "-" : "+"}
        </Text>
      </Box>

      {/* Content Section (on Expand)
      If item < 3 (grid cols amount) */}
      {IsExpanded && (
        <Box className="mt-1 mb-4 grid h-full grid-cols-2 gap-4 px-2 md:grid-cols-3 md:px-3">
          {shuffledData.map((item) => (
            <Box
              key={item.alt}
              className={`${item.makeLarge ? "row-span-2" : ""} flex items-center justify-center`}
            >
              <Tooltip
                placement="top"
                label={item.hover}
                className="font-sfpro text-sm font-bold"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  className={item.makeLarge ? "w-20" : "w-12"}
                />
              </Tooltip>
            </Box>
          ))}
        </Box>
      )}

      <Divider />
    </Box>
  );
};
