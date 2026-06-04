import { Portfolio } from "./Portfolio";

export interface PortfolioItem {
    title: string;
    categoryId: string;
    categoryTitle: string;
    created?: string;
    data?: Portfolio;
}