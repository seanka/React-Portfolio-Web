import { Portfolio, PortfolioV2 } from "../Entities/Portfolio/Portfolio";
import { BaseResponse } from "../Entities/Core/BaseResponse";
import { PortfolioCategory } from "../Entities/Portfolio/PortfolioCategory";

export interface PortfolioRepository {
  // requestPortfolioList(category: string): Promise<Portfolio[]>;
  requestPortfolioCategory(): Promise<BaseResponse<PortfolioCategory>[]>;
  requestPortfolioV2(): Promise<BaseResponse<PortfolioV2>[]>;
  requestPortfolioV2Data(category: string): Promise<BaseResponse<Portfolio>[]>;
}
