import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

import { WorkExperience } from "../../../../../../Domain/Entities/About/WorkExperience";

interface props {
  data: WorkExperience;
}

export const WorkExperienceCard: React.FC<props> = (props) => {
  const { data } = props;

  const [IsExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <Box
      border="1px"
      borderColor="#AF8E25"
      className={`my-2.5 mr-4 ml-0.5 max-w-xl min-w-52 rounded-xl px-6 py-3 md:max-w-72 md:px-8 md:py-5 ${
        data.duration?.toLowerCase().includes("present")
          ? "shadow-[0_0_14px_4px_rgba(175,142,37,0.5)]"
          : ""
      }`}
    >
      {/* Card Header Items */}
      <Text className="font-sfpro text-sm font-semibold text-white">
        {data.duration}
      </Text>
      <Text className="font-sfpro pt-2 text-base font-bold text-white">
        {data.organization}
      </Text>
      <Text className="font-sfpro text-xs font-medium text-white">
        {data.location}
      </Text>

      {/* Always shows first division item */}
      <Text className="font-sfpro pt-3 text-base font-extrabold text-white">
        {data.detail?.[0].division}
      </Text>

      <Box className="flex flex-col md:flex-row">
        <Text className="font-sfpro text-sm font-semibold text-white">
          {data.detail?.[0].employment}&nbsp;ᐧ&nbsp;
        </Text>

        {/* Dynamically show duration for first item if length more than 1 */}
        {data.detail && data.detail?.length > 1 && (
          <Text className="font-sfpro text-sm font-semibold text-white">
            {data.detail[0].duration}
          </Text>
        )}

        <Text className="font-sfpro text-sm font-medium text-white">
          {data.detail?.[0].description}
        </Text>
      </Box>

      {/* Dynamically show see more button when detail length more than 1 */}
      {data.detail && data.detail.length > 1 && (
        <Box>
          {!IsExpanded && (
            <Text
              onClick={() => setIsExpanded(!IsExpanded)}
              className="font-sfpro pt-2 text-xs font-bold text-white hover:cursor-pointer"
            >
              🔽 see more
            </Text>
          )}

          {IsExpanded && (
            <Box className="mt-2">
              {/* Render data.detail one by one, skip index 0 since it been rendered previously in main card */}
              {data.detail.map((item, index) => {
                if (index === 0) {
                  return <Box key={index}></Box>;
                }

                return (
                  <Box key={index}>
                    <Text className="font-sfpro pt-2 text-sm font-extrabold text-white">
                      {item.division}
                    </Text>
                    <Box className="flex flex-col md:flex-row">
                      <Text className="font-sfpro text-xs font-semibold text-white">
                        {item.employment}&nbsp;ᐧ&nbsp;
                      </Text>
                      <Text className="font-sfpro text-xs font-semibold text-white">
                        {item.duration}
                      </Text>
                    </Box>
                    <Text className="font-sfpro text-xs font-bold text-white">
                      {item.description}
                    </Text>
                  </Box>
                );
              })}

              <Text
                onClick={() => setIsExpanded(!IsExpanded)}
                className="font-sfpro pt-2 text-xs font-bold text-white hover:cursor-pointer"
              >
                🔼 see less
              </Text>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
