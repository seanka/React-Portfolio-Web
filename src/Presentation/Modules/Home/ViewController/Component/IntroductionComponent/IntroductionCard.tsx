import { Box, Text } from "@chakra-ui/react";

import { IntroductionData } from "../../../../../../Domain/Entities/Home/HomeIntroduction";

interface props {
  data: IntroductionData;
  iconPosition: "left" | "right";
}

export const IntroductionCart: React.FC<props> = (props) => {
  const { data, iconPosition } = props;

  return (
    // In default screen (small) layout :
    // icons
    // title
    // value

    // In larger screen layout - depends on iconPosition :
    // iconPosition = left
    // icons1 - title
    // icons1 - value
    //
    // iconPosition = right
    // title - icons1
    // value - icons1

    <Box className="my-2 flex flex-col items-center md:flex-row">
      {/* Icon only for small screen */}
      <Box className="md:hidden">
        <Text className="text-3xl md:text-4xl">{data.icon}</Text>
      </Box>

      {/* Icon only for larger screen - respect iconPosition props */}
      {iconPosition === "left" && (
        <Box className="hidden md:mr-4 md:block">
          <Text className="text-3xl md:text-4xl">{data.icon}</Text>
        </Box>
      )}

      <Box className="items-center justify-center md:flex-col">
        <Text
          className={`font-sfpro text-center text-xs font-semibold text-white ${iconPosition == "left" ? "md:text-left" : "md:text-right"} md:text-sm`}
        >
          {data.title}
        </Text>
        <Text
          className={`font-sfpro text-center text-2xl font-bold text-white ${iconPosition == "left" ? "md:text-left" : "md:text-right"} md:text-4xl`}
        >
          {data.value}
        </Text>
      </Box>

      {/* Icon only for larger screen - respect iconPosition props */}
      {iconPosition === "right" && (
        <Box className="hidden md:ml-4 md:block">
          <Text className="text-3xl md:ml-4 md:text-4xl">{data.icon}</Text>
        </Box>
      )}
    </Box>
  );
};
