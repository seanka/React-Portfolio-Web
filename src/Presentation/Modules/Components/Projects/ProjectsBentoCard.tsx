import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { PortfolioV2 } from "../../../../Domain/Entities/Portfolio/Portfolio";
import { BaseResponse } from "../../../../Domain/Entities/Core/BaseResponse";
import { PortfolioItem } from "../../../../Domain/Entities/Portfolio/PortfolioItem";

import { ProjectThumbnailCard } from "./Components/ProjectThumbnailCard";

interface props {
  categories: BaseResponse<PortfolioV2>[];
  items: PortfolioItem[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  onSelectItem: (item: PortfolioItem) => void;
}

const MotionBox = motion(Box);

export const ProjectsBentoCard: React.FC<props> = ({
  categories,
  items,
  activeCategory,
  onSelectCategory,
  onSelectItem,
}) => {
  const tabs = [
    { id: "All", title: "All" },
    ...categories.map((c) => ({ id: c.id ?? "", title: c.data?.title ?? "" })),
  ];

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      className="col-span-12 rounded-2xl bg-[#2A2A2A] p-5 md:p-6"
    >
      <Text className="font-sfpro pb-4 text-lg font-black text-white">
        Projects
      </Text>

      {/* Tab Filter */}
      <Box className="mb-5 flex flex-row flex-wrap gap-2">
        {tabs.map((tab) => (
          <Box
            key={tab.id}
            onClick={() => onSelectCategory(tab.id)}
            className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${activeCategory === tab.id
              ? "bg-[#AF8E25] text-white"
              : "bg-[#1E1E1E] text-[#939393] hover:bg-[#363636] hover:text-white"
              } font-sfpro`}
          >
            {tab.title}
          </Box>
        ))}
      </Box>

      {/* Project Grid */}
      <Box className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <ProjectThumbnailCard
            key={`${item.categoryId}-${item.title}`}
            item={item}
            index={index}
            onClick={() => onSelectItem(item)}
          />
        ))}
      </Box>

      {items.length === 0 && (
        <Box className="flex h-32 items-center justify-center">
          <Text className="font-sfpro text-sm text-[#939393]">
            No projects in this category.
          </Text>
        </Box>
      )}
    </MotionBox>
  );
};

