import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { PortfolioV2 } from "../../../../../Domain/Entities/Portfolio/Portfolio";
import { BaseResponse } from "../../../../../Domain/Entities/Core/BaseResponse";
import { PortfolioItem } from "../../ViewModel/BentoViewModel";

interface props {
  categories: BaseResponse<PortfolioV2>[];
  items: PortfolioItem[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  onSelectItem: (item: PortfolioItem) => void;
}

const MotionBox = motion(Box);

export const ProjectsCard: React.FC<props> = ({
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
            className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              activeCategory === tab.id
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

interface thumbProps {
  item: PortfolioItem;
  index: number;
  onClick: () => void;
}

const ProjectThumbnailCard: React.FC<thumbProps> = ({ item, index, onClick }) => {
  const thumbnail = item.data?.image?.[0];

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-xl bg-[#1E1E1E] transition-all hover:ring-1 hover:ring-[#AF8E25]"
    >
      {/* Thumbnail */}
      <Box className="relative h-36 overflow-hidden bg-[#363636]">
        {thumbnail ? (
          <Image
            src={thumbnail.image}
            alt={thumbnail.alt}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Box className="flex h-full items-center justify-center">
            <Text className="text-3xl">📁</Text>
          </Box>
        )}
      </Box>

      {/* Info */}
      <Box className="p-3">
        <Text
          noOfLines={2}
          className="font-sfpro text-sm font-bold leading-snug text-white"
        >
          {item.title}
        </Text>
        <Text className="font-sfpro mt-1 text-[10px] font-semibold text-[#AF8E25]">
          {item.categoryTitle}
        </Text>
      </Box>
    </MotionBox>
  );
};
