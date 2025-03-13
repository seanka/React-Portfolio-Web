import { AboutSectionsEnum } from "../../Common/Enum/About/AboutSectionsEnum";

import { TechSkills } from "../Entities/About/TechSkill";
import { BaseResponse } from "../Entities/Core/BaseResponse";
import { AboutSection } from "../Entities/About/AboutSection";

export interface AboutRepository {
  requestAboutSection(): Promise<AboutSection[]>;
  requestAboutData(
    document: AboutSectionsEnum,
  ): Promise<BaseResponse<TechSkills>>;
}
