import React, { useEffect } from "react";
import { Box, Divider, Image, Text, Tooltip } from "@chakra-ui/react";

import { TechSkills } from "../../../../../Domain/Entities/About/TechSkill";

import TechSkillViewModel from "../../ViewModel/TechSkillViewModel";
import ArrayExtension from "../../../../../Common/Core/Utils/ArrayExtension";

interface props {
  techSkillsData: TechSkills | undefined;
}

export const TechSkillsView: React.FC<props> = (props) => {
  const { techSkillsData } = props;

  const techSkillViewModel = TechSkillViewModel();
  const { IsCategoryExpanded, handleCategoryExpand, setIsCategoryExpanded } =
    techSkillViewModel;

  useEffect(() => {
    if (techSkillsData && techSkillsData.categories) {
      setIsCategoryExpanded(
        techSkillsData.categories.map((item) => ({
          id: item.id ?? "",
          state: false,
        })),
      );
    }
  }, [techSkillsData]);

  return (
    <Box className="mt-3 md:px-5">
      {!techSkillsData && <Text>Loading</Text>}

      {techSkillsData &&
        techSkillsData.categories?.map((item) => {
          // Get the state for item tab based on id
          const isItemExpanded = IsCategoryExpanded.find(
            (entry) => entry.id === item.id,
          )?.state;

          const shuffledIconsData = ArrayExtension.ShuffleArray(
            techSkillsData?.category_data?.[item.id ?? ""].icons ?? [],
          );

          return (
            <Box key={item.title} className="flex flex-col">
              {/* Title Section */}
              <Box
                className="flex flex-row items-center justify-between px-2 py-3 md:px-3 md:py-2"
                onClick={() => handleCategoryExpand(item.id ?? "")}
              >
                <Text className="font-sfpro text-base font-bold text-white">
                  {item.title}
                </Text>

                {/* Description and Expand Button */}
                <Box className="flex flex-row items-center justify-end">
                  <Text className="font-sfpro max-w-72 pr-5 text-right text-sm font-medium text-white md:max-w-fit">
                    {item.description}
                  </Text>
                  <Text className="font-sfpro text-4xl font-bold text-[#AF8E25]">
                    {isItemExpanded ? "-" : "+"}
                  </Text>
                </Box>
              </Box>

              {/* Content Section (on Expand)
              If item < 3 (grid cols amount)
              */}
              {isItemExpanded && (
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
        })}
    </Box>
  );
};
