import { useState } from "react";

import AboutDataSource from "../../../../Data/Remotes/AboutDataSource";

import { AboutSection } from "../../../../Domain/Entities/About/AboutSection";
import { AboutSectionsEnum } from "../../../../Common/Enum/About/AboutSectionsEnum";

import { Education } from "../../../../Domain/Entities/About/Education";
import { TechSkills } from "../../../../Domain/Entities/About/TechSkill";
import { BaseResponse } from "../../../../Domain/Entities/Core/BaseResponse";
import { WorkExperience } from "../../../../Domain/Entities/About/WorkExperience";

const AboutViewModel = () => {
  const ds = new AboutDataSource();

  const [AboutSections, setAboutSections] = useState<AboutSection[]>([]);
  const [TechSkillsSection, setTechSkillsSection] = useState<
    BaseResponse<TechSkills>
  >({});
  const [EducationSection, setEducationSection] = useState<
    BaseResponse<Education>
  >({});
  const [WorkExperienceSection, setWorkExperienceSection] = useState<
    BaseResponse<WorkExperience[]>
  >({});

  const [IsLoading, setIsLoading] = useState<boolean>(false);

  async function requestAboutSections() {
    setIsLoading(true);
    const response = await ds.requestAboutSection();

    setAboutSections(response);
    setIsLoading(false);
  }

  async function requestAboutData(section: AboutSectionsEnum) {
    const response = await ds.requestAboutData(section);

    if (section === AboutSectionsEnum.TECHNICAL_SKILLS) {
      setTechSkillsSection(response);
    } else if (section === AboutSectionsEnum.EDUCATION) {
      setEducationSection(response);
    } else if (section === AboutSectionsEnum.WORK_EXPERIENCE) {
      setWorkExperienceSection(response);
    }
  }

  return {
    IsLoading,
    AboutSections,
    EducationSection,
    TechSkillsSection,
    WorkExperienceSection,
    requestAboutData,
    requestAboutSections,
  };
};

export default AboutViewModel;
