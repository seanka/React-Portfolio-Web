import { BaseRemote } from "./Base/BaseRemote";

import { Collection } from "../../Common/Enum/Collection";

import { Portfolio } from "../../Domain/Entities/Portfolio";

import { PortfolioRepository } from "../../Domain/Repositories/PortfolioRepository";

export default class PortfolioDataSource implements PortfolioRepository {
  async requestPortfolio(): Promise<Portfolio[]> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({ col: Collection.portfolio });

    const response: Portfolio[] = [];
    data.forEach((doc) => response.push(doc.data()));

    return response;
  }
}
