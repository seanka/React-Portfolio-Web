import { useState } from "react";

import { BaseRemote } from "../../../Data/Remotes/Base/BaseRemote";

import { Collection } from "../../../Common/Enum/Collection";

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
