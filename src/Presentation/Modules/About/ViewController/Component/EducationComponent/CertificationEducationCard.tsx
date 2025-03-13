import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { EducationCertification } from "../../../../../../Domain/Entities/About/Education";

import Navigation from "../../../../../../Common/Core/Utils/Navigation";
import ArrayExtension from "../../../../../../Common/Core/Utils/ArrayExtension";

interface props {
  data: EducationCertification;
}

export const CertificationEducationCard: React.FC<props> = (props) => {
  const { data } = props;

  const certificationData = Array.isArray(data.data)
    ? data.data.map((item) => ({
        ...item,
        issued: item.issued ?? new Date().toISOString().slice(0, 7),
      }))
    : [];

  const sortedCertificationData =
    ArrayExtension.sortByIssuedDate(certificationData);

  return (
    <Box className="mt-1 mb-3 flex flex-col">
      {/* Title Section */}
      <Box className="flex flex-row items-end">
        <Image
          src={data.image?.image}
          alt={data.image?.alt}
          className="mr-1 w-8 rounded-lg"
        />
        <Text className="font-sfpro text-sm font-bold text-white">
          {data.organization}
        </Text>
      </Box>

      {/* Content */}
      {sortedCertificationData.map((item) => (
        <Text
          key={item.issued}
          onClick={() => window.open(item.credential ?? "", "_blank")}
          className="font-sfpro mt-1 mb-0.5 text-sm font-semibold text-white hover:text-[#AF8E25]"
        >
          ⏺&nbsp;&nbsp;&nbsp;{item.title}
        </Text>
      ))}
    </Box>
  );
};

{
  /* <Box key={item.organization}>
<Text className="font-sfpro text-sm font-bold text-white">
  {item.organization}
</Text>
</Box> */
}
