import { BaseRemote } from "./Base/BaseRemote";

import { Collection } from "../../Common/Enum/Collection";

import { Portfolio } from "../../Domain/Entities/Portfolio/Portfolio";

import { BaseResponse } from "../../Domain/Entities/Core/BaseResponse";
import { PortfolioRepository } from "../../Domain/Repositories/PortfolioRepository";
import { PortfolioCategory } from "../../Domain/Entities/Portfolio/PortfolioCategory";

export default class PortfolioDataSource implements PortfolioRepository {
  async requestPortfolioList(category: string): Promise<Portfolio[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: `${Collection.portfolio}-${Collection.data}`,
    });

    let response: Portfolio[] = [];
    const portfolioData = data.docs.find((doc) => doc.id === category);
    Object.entries(portfolioData?.data() as Record<string, Portfolio>).forEach(
      ([_, data]) => (data.isPublished ? response.push(data) : null),
    );

    return response;
  }

  async requestPortfolioCategory(): Promise<BaseResponse<PortfolioCategory>[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: `${Collection.portfolio}-${Collection.category}`,
      order: "position",
      sort: "asc",
      whereCondition: [{ field: "isPublished", operator: "==", value: true }],
    });

    const response: BaseResponse<PortfolioCategory>[] = [];
    data.forEach((doc) => response.push({ id: doc.id, data: doc.data() }));

    return response;
  }
}
