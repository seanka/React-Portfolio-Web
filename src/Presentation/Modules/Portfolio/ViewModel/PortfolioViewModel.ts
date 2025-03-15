import { useState } from "react";

import { Portfolio } from "../../../../Domain/Entities/Portfolio/Portfolio";
import { BaseResponse } from "../../../../Domain/Entities/Core/BaseResponse";
import { PortfolioCategory } from "../../../../Domain/Entities/Portfolio/PortfolioCategory";

import PortfolioDataSource from "../../../../Data/Remotes/PortolioDataSource";

const PortfolioViewModel = () => {
  const ds = new PortfolioDataSource();

  const [IsLoadPortfolioList, setIsLoadPortfolioList] =
    useState<boolean>(false);
  const [PortfolioList, setPortfolioList] = useState<Portfolio[]>([]);
  const [PortfolioCategoryList, setPortfolioCategoryList] = useState<
    BaseResponse<PortfolioCategory>[]
  >([]);
  const [ActivePortfolioCategory, setActivePortfolioCategory] = useState<
    BaseResponse<PortfolioCategory>
  >({});

  function updateActivePortfolioCategoryBasedOnParam(urlParam: string) {
    const activeObject = PortfolioCategoryList.find(
      (item) => item.id === urlParam,
    );

    if (activeObject === undefined) {
      return;
    }
    setActivePortfolioCategory(activeObject);
  }

  async function requestPortfolioList() {
    setIsLoadPortfolioList(true);
    const response = await ds.requestPortfolioList(ActivePortfolioCategory.id!);
    setPortfolioList(response);
    setIsLoadPortfolioList(false);
  }

  async function requestPortfolioCategory() {
    const response = await ds.requestPortfolioCategory();

    setPortfolioCategoryList(response);
  }

  return {
    PortfolioList,
    PortfolioCategoryList,
    IsLoadPortfolioList,
    ActivePortfolioCategory,
    requestPortfolioList,
    requestPortfolioCategory,
    setActivePortfolioCategory,

    updateActivePortfolioCategoryBasedOnParam,
  };
};

export default PortfolioViewModel;
