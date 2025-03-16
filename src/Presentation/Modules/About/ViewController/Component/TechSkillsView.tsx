import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { TechSkills } from "../../../../../Domain/Entities/About/TechSkill";

import { TechSkillViewCard } from "./TechSkillsComponent/TechSkillViewCard";

interface props {
  techSkillsData: TechSkills | undefined;
}

export const TechSkillsView: React.FC<props> = (props) => {
  const { techSkillsData } = props;

  return (
    <Box className="mt-3 md:px-5">
      {!techSkillsData && <Text>Loading</Text>}

      {techSkillsData &&
        techSkillsData.categories?.map((item) => {
          return (
            <TechSkillViewCard
              data={item}
              key={item.id}
              data_icons={techSkillsData.category_data?.[item.id ?? ""] ?? {}}
            />
          );
        })}
    </Box>
  );
};
