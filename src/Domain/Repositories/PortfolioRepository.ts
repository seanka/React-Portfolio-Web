import { Portfolio } from "../Entities/Portfolio/Portfolio";
import { PortfolioCategoryItem } from "../Entities/Portfolio/PortfolioCategoryItem";

export interface PortfolioRepository {
  requestPortfolioList(category: string): Promise<Portfolio[]>;
  requestPortfolioCategory(): Promise<PortfolioCategoryItem[]>;
}
