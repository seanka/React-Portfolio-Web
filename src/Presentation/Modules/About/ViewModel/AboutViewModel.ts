import { useRef, useState } from "react";

import AboutDataSource from "../../../../Data/Remotes/AboutDataSource";

import { Work } from "../../../../Domain/Entities/About/Work";
import { About } from "../../../../Domain/Entities/About/About";
import { Skill } from "../../../../Domain/Entities/About/Skill";
import { Education } from "../../../../Domain/Entities/About/Education";
import { BaseResponse } from "../../../../Domain/Entities/Core/BaseResponse";

import { AboutEnum } from "../../../../Common/Enum/About/AboutEnum";

import ArrayExtension from "../../../../Common/Core/Utils/ArrayExtension";

const AboutViewModel = () => {
  const ds = new AboutDataSource();

  // API call objects
  const [About, setAbout] = useState<BaseResponse<About>[]>([]);
  const [IsLoadAboutData, setIsLoadAboutData] = useState<boolean>(false);

  const AboutEduData = useRef<BaseResponse<Education>[]>();
  const AboutTechData = useRef<BaseResponse<Skill>[]>();
  const AboutWorkData = useRef<BaseResponse<Work>[]>();

  // Local objects
  const [ActiveAbout, setActiveAbout] = useState<BaseResponse<About>>();

  function updateActiveAbout(data: BaseResponse<About>) {
    if (data.id === ActiveAbout?.id) return;

    setActiveAbout(data);
  }

  // API Calls
  async function requestAboutV2() {
    const response = await ds.requestAboutV2();

    setAbout(response);
  }

  async function requestAboutV2Data() {
    setIsLoadAboutData(true);

    switch (ActiveAbout?.id) {
      case AboutEnum.EDUCATION:
        const edu = await ds.requestAboutV2Edu();

        const sortedEdu = edu.map((education) => ({
          id: education.id,
          data: {
            title: education.data?.title,
            listData: ArrayExtension.SortArrayByPosition(
              Object.values(education.data?.data ?? []),
            ),
          },
        })) as BaseResponse<Education>[];

        AboutEduData.current = sortedEdu;
        break;

      case AboutEnum.TECHNICAL_SKILLS:
        const tech = await ds.requestAboutV2Skill();

        const sortedTech = ArrayExtension.SortArrayByDataPosition(
          tech,
          "asc",
        ) as BaseResponse<Skill>[];
        // set default expanded to true
        sortedTech.map((skill) => (skill.data!.expanded = true));
        AboutTechData.current = sortedTech;
        break;

      case AboutEnum.WORK_EXPERIENCE:
        const work = await ds.requestAboutV2Work();

        let sortedWork = ArrayExtension.SortArrayByDataPosition(
          work,
          "desc",
        ) as BaseResponse<Work>[];
        sortedWork = sortedWork.map((work) => ({
          id: work.id,
          data: {
            title: work.data?.title,
            location: work.data?.location,
            position: work.data?.position,
            duration: work.data?.duration,
            currentWork: work.data?.currentWork,
            detail: work.data?.detail?.reverse(),
          },
        }));

        AboutWorkData.current = sortedWork;
        break;

      default:
        break;
    }

    setIsLoadAboutData(false);
  }

  return {
    About,
    ActiveAbout,
    AboutWorkData,
    AboutTechData,
    IsLoadAboutData,
    AboutEduData,
    updateActiveAbout,
    requestAboutV2,
    requestAboutV2Data,
  };
};

export default AboutViewModel;
