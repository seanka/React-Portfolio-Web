import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { WorkDetail } from "../../../../../Domain/Entities/About/Work";

interface props {
  detail: WorkDetail,
  isCurrent: boolean,
}

export const WorkRoleRow: React.FC<props> = ({ detail, isCurrent }) => {
  return (
    <Box className="mt-1.5 flex flex-row flex-wrap items-center gap-x-2 gap-y-0.5">
      <Text className={`font-sfpro text-sm font-semibold ${isCurrent ? "text-[#AF8E25]" : "text-[#CCCCCC]"}`}>
        {detail.division}
      </Text>
      <Text className="font-sfpro text-sm text-[#555]">·</Text>
      <Text className="font-sfpro text-sm text-[#666]">{detail.duration}</Text>
      {detail.employment && (
        <Box className="rounded bg-[#333] px-1.5 py-0.5">
          <Text className="font-sfpro text-sm text-[#777]">
            {detail.employment}
          </Text>
        </Box>
      )}
    </Box>
  )
}