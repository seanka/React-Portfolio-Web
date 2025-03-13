import { useState } from "react";

import AboutDataSource from "../../../../Data/Remotes/AboutDataSource";

import { AboutSection } from "../../../../Domain/Entities/About/AboutSection";
import { AboutSectionsEnum } from "../../../../Common/Enum/About/AboutSectionsEnum";

import { TechSkills } from "../../../../Domain/Entities/About/TechSkill";
import { BaseResponse } from "../../../../Domain/Entities/Core/BaseResponse";

const AboutViewModel = () => {
  const ds = new AboutDataSource();

  const [AboutSections, setAboutSections] = useState<AboutSection[]>([]);
  const [TechSkillsSection, setTechSkillsSection] = useState<
    BaseResponse<TechSkills>
  >({});

  const [IsLoading, setIsLoading] = useState<boolean>(false);

  async function requestAboutSections() {
    const response = await ds.requestAboutSection();

    setAboutSections(response);
  }

  async function requestAboutData(section: AboutSectionsEnum) {
    // setIsLoading(true);
    const response = await ds.requestAboutData(section);

    if (section === AboutSectionsEnum.TECHNICAL_SKILLS) {
      setTechSkillsSection(response);
    }
  }

  return {
    IsLoading,
    AboutSections,
    TechSkillsSection,
    requestAboutData,
    requestAboutSections,
  };
};

export default AboutViewModel;
