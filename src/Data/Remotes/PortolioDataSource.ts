import { BaseRemote } from "./Base/BaseRemote";

import { Collection } from "../../Common/Enum/Collection";

import { Portfolio } from "../../Domain/Entities/Portfolio/Portfolio";

import { PortfolioRepository } from "../../Domain/Repositories/PortfolioRepository";
import { PortfolioCategoryItem } from "../../Domain/Entities/Portfolio/PortfolioCategoryItem";

export default class PortfolioDataSource implements PortfolioRepository {
  async requestPortfolioList(category: string): Promise<Portfolio[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: Collection.portfolio,
      order: "created",
      sort: "desc",
      whereCondition: [
        { field: "category", operator: "==", value: category },
        { field: "isPublished", operator: "==", value: true },
      ],
    });

    const response: Portfolio[] = [];
    data.forEach((doc) => response.push(doc.data()));

    return response;
  }

  async requestPortfolioCategory(): Promise<PortfolioCategoryItem[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: Collection.portfolio_category,
      order: "position",
      sort: "asc",
    });

    const response: PortfolioCategoryItem[] = [];
    data.forEach((doc) => response.push(doc.data()));

    return response;
  }
}
