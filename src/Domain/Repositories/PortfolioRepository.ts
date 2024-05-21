import { Portfolio } from "../Entities/Portfolio";

export interface PortfolioRepository {
  requestPortfolio(): Promise<Portfolio[]>;
}
