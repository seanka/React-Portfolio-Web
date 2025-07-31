import { useRef, useState } from "react";

import {
  Portfolio,
  PortfolioV2,
} from "../../../../Domain/Entities/Portfolio/Portfolio";
import { BaseResponse } from "../../../../Domain/Entities/Core/BaseResponse";

import PortfolioDataSource from "../../../../Data/Remotes/PortolioDataSource";
import ArrayExtension from "../../../../Common/Core/Utils/ArrayExtension";

const PortfolioViewModel = () => {
  const ds = new PortfolioDataSource();

  const [IsLoadPortfolioList, setIsLoadPortfolioList] =
    useState<boolean>(false);

  const [Portfolio, setPortfolio] = useState<BaseResponse<PortfolioV2>[]>([]);
  const [PortfolioData, setPortfolioData] = useState<BaseResponse<Portfolio>>(
    {},
  );
  const PortfolioCategoryData = useRef<BaseResponse<Portfolio>[]>([]);

  const [ActivePortfolio, setActivePortfolio] = useState<{
    Category: string;
    Item: string;
  }>({ Category: "", Item: "" });
  const PrevActiveCategory = useRef(ActivePortfolio.Category);

  function updateActivePortfolio(
    category: string | undefined,
    item: string | undefined,
  ) {
    // Update the Category attribute when passed category within this method is new
    // Always update Item attribute
    if (!category || !item) return;

    setActivePortfolio((prev) => ({
      Category: prev.Category === category! ? prev.Category : category!,
      Item: item!,
    }));
  }

  function currentItemActive(
    category: string | undefined,
    item: string | undefined,
  ) {
    if (!category && !item) {
      return;
    }

    return (
      ActivePortfolio.Category === category && ActivePortfolio.Item === item
    );
  }

  function updateExpanded(category: BaseResponse<PortfolioV2>) {
    setPortfolio((prev) =>
      prev.map((item) =>
        item.id === category.id
          ? { ...item, data: { ...item.data, expanded: !item.data?.expanded } }
          : item,
      ),
    );
  }

  // API Functions
  async function requestPortfolioCategoryV2() {
    const response = await ds.requestPortfolioV2();

    const sortedResponse = response.map((category) => ({
      id: category.id,
      data: {
        expanded: true,
        id: category.data?.id,
        title: category.data?.title,
        position: category.data?.position,
        data: ArrayExtension.sortByCreatedDate(category.data?.data ?? []),
      },
    }));

    setPortfolio(sortedResponse);
  }

  async function requestPortfolioV2Data() {
    setIsLoadPortfolioList(true);
    const response = await ds.requestPortfolioV2Data(ActivePortfolio.Category);
    PortfolioCategoryData.current = response;
    setIsLoadPortfolioList(false);
  }

  return {
    Portfolio,
    PortfolioData,
    ActivePortfolio,
    PrevActiveCategory,
    IsLoadPortfolioList,
    PortfolioCategoryData,
    updateExpanded,
    setPortfolioData,
    currentItemActive,
    setActivePortfolio,
    updateActivePortfolio,
    requestPortfolioV2Data,
    requestPortfolioCategoryV2,
  };
};

export default PortfolioViewModel;
