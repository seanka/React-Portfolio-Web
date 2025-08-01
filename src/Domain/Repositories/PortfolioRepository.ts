import { BaseResponse } from "../Entities/Core/BaseResponse";
import { Portfolio, PortfolioV2 } from "../Entities/Portfolio/Portfolio";

export interface PortfolioRepository {
  requestPortfolioV2(): Promise<BaseResponse<PortfolioV2>[]>;
  requestPortfolioV2Data(category: string): Promise<BaseResponse<Portfolio>[]>;
}
