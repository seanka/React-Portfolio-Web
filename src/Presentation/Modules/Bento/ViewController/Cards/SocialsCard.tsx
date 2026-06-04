import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { HomeIntroduction } from "../../../../../Domain/Entities/Home/HomeIntroduction";

interface props {
  data: HomeIntroduction;
}

const MotionBox = motion(Box);

export const SocialsCard: React.FC<props> = ({ data }) => {
  const contacts = (data.listContact ?? []).filter((c) => c.published && c.url);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
      className="col-span-12 md:col-span-2 flex flex-col justify-between md:justify-start rounded-2xl bg-[#2A2A2A] p-5"
    >
      <Text className="font-sfpro text-xs font-semibold uppercase tracking-widest text-[#939393]">
        Connect
      </Text>

      <Box className="mt-4 flex flex-row md:flex-col gap-x-3 md:gap-y-3 md:mt-10">
        {contacts.map((contact) => (
          <Box
            key={contact.url}
            onClick={() => window.open(contact.url ?? "", "_blank")}
            className="flex cursor-pointer flex-row self-center gap-x-3 rounded-xl bg-[#1E1E1E] p-3 transition-all hover:bg-[#363636]"
          >
            <Image src={contact.image} className="w-7 flex-shrink-0 self-center" />
          </Box>
        ))}
      </Box>
    </MotionBox>
  );
};
