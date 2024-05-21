import { useState } from "react";

import { Portfolio } from "../../../Domain/Entities/Portfolio";

import PortfolioDataSource from "../../../Data/Remotes/PortolioDataSource";

export function PortfolioViewModel() {
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>();

  //* Get Variable Methods
  function getPortfolioList() {
    return portfolioList;
  }

  // * API Call Methods
  async function requestPortfolioList() {
    const ds = new PortfolioDataSource();
    const response = await ds.requestPortfolio();

    setPortfolioList(response);
  }

  return {
    getPortfolioList,

    requestPortfolioList,
  };
}
