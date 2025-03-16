import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { EducationCertification } from "../../../../../../Domain/Entities/About/Education";

import ArrayExtension from "../../../../../../Common/Core/Utils/ArrayExtension";

interface props {
  data: EducationCertification;
}

export const CertificationEducationCard: React.FC<props> = (props) => {
  const { data } = props;

  const sortedCertificationData = ArrayExtension.sortByIssuedDate(
    data.data ?? [],
  );

  return (
    <Box className="mx-0.5 mt-1 mb-3 flex flex-col">
      {/* Title Section */}
      <Box className="mb-1 flex flex-row items-end">
        <Image
          src={data.image?.image}
          alt={data.image?.alt}
          className="mr-1 w-8 rounded-lg"
        />
        <Text className="font-sfpro text-base font-bold text-white">
          {data.organization}
        </Text>
      </Box>

      {/* Content */}
      {sortedCertificationData.map((item) => (
        <Text
          key={item.issued}
          onClick={() => window.open(item.credential ?? "", "_blank")}
          className="font-sfpro mt-1 mb-0.5 pb-0.5 text-sm font-semibold text-white hover:text-[#AF8E25]"
        >
          ⏺&nbsp;&nbsp;&nbsp;{item.title}
        </Text>
      ))}
    </Box>
  );
};
