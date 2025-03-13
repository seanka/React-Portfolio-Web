import React, { useEffect } from "react";

import { Box, Text } from "@chakra-ui/react";

import { AboutSection } from "../../../../../Domain/Entities/About/AboutSection";
import { AboutSectionsEnum } from "../../../../../Common/Enum/About/AboutSectionsEnum";

import { TechSkillsView } from "./TechSkillsView";

import AboutViewModel from "../../ViewModel/AboutViewModel";
import { EducationView } from "./EducationView";

interface props {
  section: AboutSection;
  aboutVM: ReturnType<typeof AboutViewModel>;
}

export const AboutSectionView: React.FC<props> = (props) => {
  const { section, aboutVM } = props;
  const { requestAboutData, EducationSection, TechSkillsSection } = aboutVM;

  useEffect(() => {
    if (!section.id) {
      return;
    }

    requestAboutData(section.id);
  }, []);

  return (
    <Box key={section.title} className="mt-3 mb-5">
      {/* Title and Subtitle component
      In default screen (small), stacking top and bottom
      In larger screen, space between in the same row
       */}
      <Box className="flex flex-col md:flex-row md:items-center md:justify-between">
        <Text className="font-sfpro text-lg font-extrabold text-white">
          {section.title}
        </Text>

        <Text className="font-sfpro text-sm font-bold text-white italic">
          {section.subtitle}
        </Text>
      </Box>

      {/* Dynamic Component depending on section id */}
      {section.id === AboutSectionsEnum.TECHNICAL_SKILLS && (
        <TechSkillsView techSkillsData={TechSkillsSection.data} />
      )}
      {section.id === AboutSectionsEnum.EDUCATION && (
        <EducationView educationData={EducationSection.data} />
      )}
    </Box>
  );
};
