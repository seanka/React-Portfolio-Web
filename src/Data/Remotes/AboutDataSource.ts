import { BaseRemote } from "./Base/BaseRemote";

import { Collection } from "../../Common/Enum/Collection";

import { AboutSection } from "../../Domain/Entities/About/AboutSection";
import { AboutRepository } from "../../Domain/Repositories/AboutRepository";
import { BaseResponse } from "../../Domain/Entities/Core/BaseResponse";

import { Education } from "../../Domain/Entities/About/Education";
import { TechSkills } from "../../Domain/Entities/About/TechSkill";
import { AboutSectionsEnum } from "../../Common/Enum/About/AboutSectionsEnum";

export default class AboutDataSource implements AboutRepository {
  async requestAboutSection(): Promise<AboutSection[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: `${Collection.about}-${Collection.sections}`,
      order: "position",
      sort: "asc",
      whereCondition: [{ field: "isPublished", operator: "==", value: true }],
    });

    const response: AboutSection[] = [];
    data.forEach((doc) => response.push(doc.data()));
    return response;
  }

  async requestAboutData(
    document: AboutSectionsEnum,
  ): Promise<BaseResponse<any>> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: `${Collection.about}-${Collection.data}`,
    });

    let response: BaseResponse<any> = { id: document, data: {} };
    const aboutData = data.docs.find((doc) => doc.id === document);

    if (document === AboutSectionsEnum.TECHNICAL_SKILLS) {
      response.data = aboutData?.data() as TechSkills;
    } else if (document === AboutSectionsEnum.EDUCATION) {
      response.data = aboutData?.data() as Education;
    } else if (document === AboutSectionsEnum.WORK_EXPERIENCE) {
      // response.data = aboutData?.data() as TechSkills;
    }

    return response;
  }
}
