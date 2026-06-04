import { BaseRemote } from "./Base/BaseRemote";

import { Collection } from "../../Common/Enum/Collection";

import {
  Portfolio,
  PortfolioV2,
  PortfolioBriefData,
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
    data.forEach((doc) => {
      let data = doc.data()
      let portfolioData: PortfolioBriefData[] = []

      data.data.forEach((element: PortfolioBriefData) => {
        if (element.published == true) { portfolioData.push(element) }
      });
      data.data = portfolioData

      response.push({ id: doc.id, data: data })
    })

    return response;
  }

  async requestPortfolioV2Data(
    category: string,
  ): Promise<BaseResponse<Portfolio>[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: `${Collection.portfolio_v2}/${category}/${Collection.data}`,
      whereCondition: [{ field: "published", operator: "==", value: true }],
    });

    const response: BaseResponse<Portfolio>[] = [];
    data.forEach((doc) => response.push({ id: doc.id, data: doc.data() }));

    return response;
  }
}
