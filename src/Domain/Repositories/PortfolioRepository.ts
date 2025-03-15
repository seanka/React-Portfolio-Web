import { Portfolio } from "../Entities/Portfolio/Portfolio";
import { BaseResponse } from "../Entities/Core/BaseResponse";
import { PortfolioCategory } from "../Entities/Portfolio/PortfolioCategory";

export interface PortfolioRepository {
  requestPortfolioList(category: string): Promise<Portfolio[]>;
  requestPortfolioCategory(): Promise<BaseResponse<PortfolioCategory>[]>;
}
