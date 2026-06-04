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
      className="col-span-12 md:col-span-3 md:row-span-2 flex flex-col justify-between rounded-2xl bg-[#2A2A2A] p-5"
    >
      <Text className="font-sfpro text-xs font-semibold uppercase tracking-widest text-[#939393]">
        Connect
      </Text>

      <Box className="mt-4 flex flex-col gap-y-3 md:mt-0">
        {contacts.map((contact) => (
          <Box
            key={contact.url}
            onClick={() => window.open(contact.url ?? "", "_blank")}
            className="flex cursor-pointer flex-row items-center gap-x-3 rounded-xl bg-[#1E1E1E] p-3 transition-all hover:bg-[#363636]"
          >
            <Image src={contact.image} className="w-7 flex-shrink-0" />
          </Box>
        ))}
      </Box>

      {/* Animated lottie wave icon (kept from old design) */}
      <Box className="mt-4 flex justify-center md:mt-0">
        <iframe
          width="40px"
          className="pointer-events-none"
          src="https://lottie.host/embed/0743b971-5cad-4416-a194-4901eb11ff8b/jIrUn3ydMu.lottie"
        />
      </Box>
    </MotionBox>
  );
};
