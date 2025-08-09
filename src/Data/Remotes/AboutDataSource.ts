import { BaseRemote } from "./Base/BaseRemote";

import { AboutRepository } from "../../Domain/Repositories/AboutRepository";

import { Collection } from "../../Common/Enum/Collection";
import { AboutEnum } from "../../Common/Enum/About/AboutEnum";

import { Work } from "../../Domain/Entities/About/Work";
import { Skill } from "../../Domain/Entities/About/Skill";
import { About } from "../../Domain/Entities/About/About";
import { Education } from "../../Domain/Entities/About/Education";
import { BaseResponse } from "../../Domain/Entities/Core/BaseResponse";

export default class AboutDataSource implements AboutRepository {
  async requestAboutV2(): Promise<BaseResponse<About>[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: `${Collection.about_v2}`,
      order: "position",
      sort: "asc",
      whereCondition: [
        { field: "categoryPublished", operator: "==", value: true },
      ],
    });

    const response: BaseResponse<About>[] = [];
    data.forEach((doc) => response.push({ id: doc.id, data: doc.data() }));

    return response;
  }

  async requestAboutV2Edu(): Promise<BaseResponse<Education>[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: `${Collection.about_v2}/${AboutEnum.EDUCATION}/${Collection.data}`,
    });

    const response: BaseResponse<Education>[] = [];
    data.forEach((doc) => response.push({ id: doc.id, data: doc.data() }));

    return response;
  }

  async requestAboutV2Skill(): Promise<BaseResponse<Skill>[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: `${Collection.about_v2}/${AboutEnum.TECHNICAL_SKILLS}/${Collection.data}`,
    });

    const response: BaseResponse<Skill>[] = [];
    data.forEach((doc) => response.push({ id: doc.id, data: doc.data() }));

    return response;
  }

  async requestAboutV2Work(): Promise<BaseResponse<Work>[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: `${Collection.about_v2}/${AboutEnum.WORK_EXPERIENCE}/${Collection.data}`,
    });

    const response: BaseResponse<Work>[] = [];
    data.forEach((doc) => response.push({ id: doc.id, data: doc.data() }));

    return response;
  }
}
