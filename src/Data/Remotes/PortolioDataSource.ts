import { BaseRemote } from "./Base/BaseRemote";

import { Collection } from "../../Common/Enum/Collection";

import {
  Portfolio,
  PortfolioV2,
} from "../../Domain/Entities/Portfolio/Portfolio";

import { BaseResponse } from "../../Domain/Entities/Core/BaseResponse";
import { PortfolioRepository } from "../../Domain/Repositories/PortfolioRepository";

export default class PortfolioDataSource implements PortfolioRepository {
  async requestPortfolioV2(): Promise<BaseResponse<PortfolioV2>[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: Collection.portfolio_v2,
      order: "position",
      sort: "asc",
      whereCondition: [
        { field: "categoryPublished", operator: "==", value: true },
      ],
    });

    const response: BaseResponse<PortfolioV2>[] = [];
    data.forEach((doc) => response.push({ id: doc.id, data: doc.data() }));

    // Take out unpublished item for each data in PortfolioData
    response.forEach((category) => {
      if (category.data?.data) {
        category.data.data = category.data?.data?.filter(
          (item) => item.published,
        );
      }
    });

    return response;
  }

  async requestPortfolioV2Data(
    category: string,
  ): Promise<BaseResponse<Portfolio>[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: `${Collection.portfolio_v2}/${category}/${Collection.data}`,
    });

    const response: BaseResponse<Portfolio>[] = [];
    data.forEach((doc) => response.push({ id: doc.id, data: doc.data() }));

    return response;
  }
}
