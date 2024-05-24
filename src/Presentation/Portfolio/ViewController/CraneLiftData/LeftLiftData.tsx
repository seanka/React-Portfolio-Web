import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { BoxAspectRatio } from "../../../../Common/Interface/AspectRatio";
import useWindowDimension from "../../../../Common/Utils/useWindowDimension";

import { Portfolio } from "../../../../Domain/Entities/Portfolio";

interface props {
  data: Portfolio;
}

const LeftLiftData: React.FC<props> = (props) => {
  const { data } = props;

  const { width } = useWindowDimension();

  return (
    <Box width={width / 4 - 10} justifyContent="center" display="flex" flexDirection="column">
      <Text as="b" fontSize={FONT_TITLE_SIZE}>
        {data.title}
      </Text>

      <Text as="b" fontSize={FONT_FIELD_SIZE}>
        {data.field}
      </Text>

      <Box display="flex" flexDirection="row" marginTop={2} alignSelf="flex-start" justifyContent="flex-start">
        {data.framework?.map((icon, index) => {
          return (
            <Image
              p={1}
              key={index}
              alt={icon.alt}
              marginRight={2}
              src={icon.image}
              bgColor="white"
              objectFit="cover"
              boxSize={IC_FRAMEWORK_SIZE}
              borderRadius={IC_FRAMEWORK_BORDER_RAD}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default LeftLiftData;

const IC_FRAMEWORK_ASPECT_RATIO: BoxAspectRatio = {
  small: { size: 6, borderRad: 4 },
  med: { size: 10, borderRad: 6 },
  big: { size: 12, borderRad: 8 },
};

const FONT_TITLE_SIZE = [12, null, 22, null, 32];

const FONT_FIELD_SIZE = [8, null, 12, null, 16];

const IC_FRAMEWORK_SIZE = [IC_FRAMEWORK_ASPECT_RATIO.small.size, null, IC_FRAMEWORK_ASPECT_RATIO.med.size, null, IC_FRAMEWORK_ASPECT_RATIO.big.size];

const IC_FRAMEWORK_BORDER_RAD = [
  IC_FRAMEWORK_ASPECT_RATIO.small.borderRad!,
  null,
  IC_FRAMEWORK_ASPECT_RATIO.med.borderRad!,
  null,
  IC_FRAMEWORK_ASPECT_RATIO.big.borderRad!,
];
