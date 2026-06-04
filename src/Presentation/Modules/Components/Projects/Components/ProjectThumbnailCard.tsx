import React from "react";

import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { PortfolioItem } from "../../../../../Domain/Entities/Portfolio/PortfolioItem";

interface props {
    item: PortfolioItem;
    index: number;
    onClick: () => void;
}

const MotionBox = motion(Box);

export const ProjectThumbnailCard: React.FC<props> = ({ item, index, onClick }) => {
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
