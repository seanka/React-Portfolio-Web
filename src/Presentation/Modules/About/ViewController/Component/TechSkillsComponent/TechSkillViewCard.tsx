import React, { useState } from "react";
import { Box, Divider, Image, Text, Tooltip } from "@chakra-ui/react";

import ArrayExtension from "../../../../../../Common/Core/Utils/ArrayExtension";
import {
  TechSkillCategoryDataItem,
  TechSkillCategoryItem,
} from "../../../../../../Domain/Entities/About/TechSkill";

interface props {
  data: TechSkillCategoryItem;
  data_icons: TechSkillCategoryDataItem;
}

export const TechSkillViewCard: React.FC<props> = (props) => {
  const { data, data_icons } = props;

  const shuffledIconsData = ArrayExtension.ShuffleArray(data_icons.icons ?? []);

  const [IsExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <Box key={data.title} className="flex flex-col">
      {/* Title Section */}
      <Box
        onClick={() => setIsExpanded(!IsExpanded)}
        className="flex flex-row items-center justify-between px-2 py-3 hover:cursor-pointer md:px-3 md:py-2"
      >
        <Text className="font-sfpro text-base font-bold text-white">
          {data.title}
        </Text>

        {/* Description and Expand Button */}
        <Box className="flex flex-row items-center justify-end">
          <Text className="font-sfpro max-w-72 pr-5 text-right text-sm font-medium text-white md:max-w-fit">
            {data.description}
          </Text>
          <Text className="font-sfpro text-4xl font-bold text-[#AF8E25]">
            {IsExpanded ? "-" : "+"}
          </Text>
        </Box>
      </Box>

      {/* Content Section (on Expand)
                  If item < 3 (grid cols amount)
                  */}
      {IsExpanded && (
        <Box className="mt-1 mb-4 grid h-full grid-cols-2 gap-4 px-2 md:grid-cols-3 md:px-3">
          {shuffledIconsData.map((item) => (
            <Box
              key={item.alt}
              className={`${item.isLarger ? "row-span-2" : ""} flex items-center justify-center`}
            >
              <Tooltip
                placement="top"
                label={item.hover}
                className="font-sfpro text-sm font-bold"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  className={`${item.isLarger ? "w-20" : "w-12"} rounded-lg bg-white`}
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
