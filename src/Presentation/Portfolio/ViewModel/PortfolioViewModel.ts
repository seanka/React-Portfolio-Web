import { useState } from "react";

import { Portfolio } from "../../../Domain/Entities/Portfolio";

import PortfolioDataSource from "../../../Data/Remotes/PortolioDataSource";

export function PortfolioViewModel() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>();

  //* Get Variable Methods
  function getIsLoading() {
    return isLoading;
  }

  function getPortfolioList() {
    return portfolioList;
  }

  // * API Call Methods
  async function requestPortfolioList() {
    setIsLoading(true);

    const ds = new PortfolioDataSource();
    const response = await ds.requestPortfolio();

    setPortfolioList(response);
    setIsLoading(false);
  }

  return {
    getIsLoading,
    getPortfolioList,

    requestPortfolioList,
  };
}
