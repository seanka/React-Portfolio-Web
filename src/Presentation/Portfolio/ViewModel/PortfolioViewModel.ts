import { useState } from "react";

import { Portfolio } from "../../../Domain/Entities/Portfolio";

import PortfolioDataSource from "../../../Data/Remotes/PortolioDataSource";

export function PortfolioViewModel() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>();

  const [isShowDecoration, setIsShowDecoration] = useState(false);

  //* Get Variable Methods
  function getIsLoading() {
    return isLoading;
  }

  function getPortfolioList() {
    return portfolioList;
  }

  function getIsShowDecoration() {
    return isShowDecoration;
  }

  // * API Call Methods
  async function requestPortfolioList() {
    setIsShowDecoration(false);
    setIsLoading(true);

    const ds = new PortfolioDataSource();
    const response = await ds.requestPortfolio();

    setPortfolioList(response);
    setIsLoading(false);

    setTimeout(() => {
      setIsShowDecoration(true);
    }, 500);
  }

  return {
    getIsLoading,
    getPortfolioList,
    getIsShowDecoration,

    requestPortfolioList,
  };
}
