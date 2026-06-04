import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import { PortfolioItemView } from "./PortfolioItemView";

import { PortfolioItem } from "../../../../../../Domain/Entities/Portfolio/PortfolioItem";

interface props {
  item: PortfolioItem | null;
  onClose: () => void;
}

const MotionBox = motion(Box);

export const ProjectDetailModal: React.FC<props> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Background overlay */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/80"
            onClick={onClose}
          />

          {/* Modal panel — slides up from bottom on mobile, centered on desktop */}
          <MotionBox
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-scroll rounded-t-3xl bg-[#1E1E1E] md:inset-0 md:m-auto md:h-[85vh] md:max-h-[85vh] md:max-w-2xl md:rounded-3xl"
          >
            {/* Header */}
            <Box className="sticky top-0 z-10 flex flex-row items-start justify-between bg-[#1E1E1E] px-5 pt-5 pb-3">
              <Box>
                <Text className="font-sfpro text-lg font-black text-white">
                  {item.title}
                </Text>
                <Text className="font-sfpro mt-0.5 text-xs font-semibold text-[#AF8E25]">
                  {item.categoryTitle}
                </Text>
              </Box>

              {/* Close button */}
              <Box
                onClick={onClose}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#2A2A2A] transition-colors hover:bg-[#363636]"
              >
                <Text className="font-sfpro text-sm font-bold text-white">✕</Text>
              </Box>
            </Box>

            {/* Content */}
            <Box className="px-5 pb-10">
              {item.data ? (
                <PortfolioItemView item={item.data} />
              ) : (
                <Box className="flex h-40 items-center justify-center">
                  <Text className="font-sfpro text-sm text-[#939393]">
                    No detail available.
                  </Text>
                </Box>
              )}
            </Box>
          </MotionBox>
        </>
      )}
    </AnimatePresence>
  );
};
