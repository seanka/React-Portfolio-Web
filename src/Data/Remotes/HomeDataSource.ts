import { BaseRemote } from "./Base/BaseRemote";

import { Collection } from "../../Common/Enum/Collection";

import { Home } from "../../Domain/Entities/Home/Home";
import { BaseResponse } from "../../Domain/Entities/Core/BaseResponse";

import { HomeRepository } from "../../Domain/Repositories/HomeRepository";

export default class HomeDataSource implements HomeRepository {
  async requestHomeV2(): Promise<BaseResponse<Home>[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: Collection.home_v2,
      order: "position",
      sort: "asc",
      whereCondition: [
        { field: "categoryPublished", operator: "==", value: true },
      ],
    });

    const response: BaseResponse<Home>[] = [];
    data.forEach((doc) => response.push({ id: doc.id, data: doc.data() }));

    return response;
  }
}
