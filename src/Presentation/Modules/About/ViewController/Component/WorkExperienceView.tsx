import React from "react";
import { Box, Text } from "@chakra-ui/react";

import ArrayExtension from "../../../../../Common/Core/Utils/ArrayExtension";
import { WorkExperience } from "../../../../../Domain/Entities/About/WorkExperience";

import { WorkExperienceCard } from "./WorkExpComponent/WorkExperienceCard";

interface props {
  workExperienceData: WorkExperience[] | undefined;
}

export const WorkExperienceView: React.FC<props> = (props) => {
  const { workExperienceData } = props;

  const sortedWorkExp = ArrayExtension.SortArrayByPosition(
    workExperienceData ?? [],
  );

  return (
    <Box className="mt-3">
      {!workExperienceData && <Text>Loading ...</Text>}

      {workExperienceData && (
        <Box className="mx-3 flex flex-row overflow-x-scroll px-2.5">
          {sortedWorkExp.map((item) => (
            <WorkExperienceCard key={item.organization} data={item} />
          ))}
        </Box>
      )}
    </Box>
  );
};
