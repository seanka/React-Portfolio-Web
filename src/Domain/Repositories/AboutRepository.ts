import { Work } from "../Entities/About/Work";
import { About } from "../Entities/About/About";
import { Skill } from "../Entities/About/Skill";
import { Education } from "../Entities/About/Education";
import { BaseResponse } from "../Entities/Core/BaseResponse";

export interface AboutRepository {
  requestAboutV2(): Promise<BaseResponse<About>[]>;
  requestAboutV2Edu(): Promise<BaseResponse<Education>[]>;
  requestAboutV2Skill(): Promise<BaseResponse<Skill>[]>;
  requestAboutV2Work(): Promise<BaseResponse<Work>[]>;
}
