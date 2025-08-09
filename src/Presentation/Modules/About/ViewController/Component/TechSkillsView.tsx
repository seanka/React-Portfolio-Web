import React from "react";
import { Box } from "@chakra-ui/react";

import { Skill } from "../../../../../Domain/Entities/About/Skill";
import { BaseResponse } from "../../../../../Domain/Entities/Core/BaseResponse";

import { TechSkillCard } from "./TechSkillComponent/TechSkillCard";

interface props {
  data: BaseResponse<Skill>[];
}

export const TechSkillsView: React.FC<props> = (props) => {
  const { data } = props;

  return (
    <Box className="flex h-full flex-col justify-center md:px-5">
      {data.map((category) => {
        if (!category.data?.published) return;

        return (
          <Box key={category.id}>
            {category && category.id && category.data && category.data.data && (
              <TechSkillCard title={category.id} data={category.data} />
            )}
          </Box>
        );
      })}
    </Box>
  );
};
