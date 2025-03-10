import React, { useEffect } from "react";

import { Box, Text } from "@chakra-ui/react";

import { PortfolioItem } from "./Component/PortfolioItem";
import { PortfolioCategory } from "./Component/PortfolioCategory";
import { SpinnerLoader } from "../../../Common/SpinnerLoader/SpinnerLoader";

import PortfolioViewModel from "../ViewModel/PortfolioViewModel";

import Navigation from "../../../../Common/Core/Utils/Navigation";

export const PortfolioViewController: React.FC = () => {
  const portfolioVM = PortfolioViewModel();
  const {
    PortfolioList,
    IsLoadPortfolioList,
    requestPortfolioList,
    PortfolioCategoryList,
    ActivePortfolioCategory,
    requestPortfolioCategory,
    setActivePortfolioCategory,
    updateActivePortfolioCategoryBasedOnParam,
  } = portfolioVM;

  const navigation = Navigation();
  const urlParam = navigation.getUrlParam();

  useEffect(() => {
    requestPortfolioCategory();
  }, []);

  useEffect(() => {
    /*
      Check whether the url param is empty
      If not empty, set active category automatically
      If not empty, set active category to first item automatically
    */
    if (Object.keys(urlParam).length !== 0) {
      if (urlParam["category"] === "") {
        return;
      }

      updateActivePortfolioCategoryBasedOnParam(urlParam["category"]!);
      return;
    }

    if (PortfolioCategoryList.length > 0) {
      setActivePortfolioCategory(PortfolioCategoryList[0]);
    }
  }, [PortfolioCategoryList]);

  useEffect(() => {
    const activeCategory = ActivePortfolioCategory;

    if (Object.keys(activeCategory).length === 0) {
      return;
    }

    requestPortfolioList();
    navigation.navigateToPath({
      path: `/portfolio/${activeCategory.id}`,
      replace: true,
    });
  }, [ActivePortfolioCategory]);

  return (
    <Box className="flex h-screen flex-row">
      {/* Category List Tab */}
      <Box className="h-screen w-[30%] bg-[#222222] md:w-[25%] lg:w-[20%]">
        <Text className="font-sfpro py-2 pl-4 text-xs text-[#939393]">
          Category List
        </Text>

        <Box className="h-[1px] w-full bg-[#939393]" />

        {/* Category List Cards */}
        {PortfolioCategoryList?.map((item) => (
          <Box
            key={item.id}
            className="my-2 mr-2 ml-2.5 rounded-lg px-6 py-4"
            backgroundColor={
              urlParam["category"] === item.id ? "#AF8E25" : "transparent"
            }
            onClick={() =>
              urlParam["category"] !== item.id
                ? setActivePortfolioCategory(item)
                : null
            }
          >
            <PortfolioCategory key={item.id} category={item} />
          </Box>
        ))}
      </Box>

      {/* Portfolio Content */}
      <Box className="flex h-full w-full flex-col overflow-y-scroll bg-[#1E1E1E] px-6 pt-8">
        <Text className="font-sfpro text-xl font-extrabold text-white">
          {ActivePortfolioCategory.title}
        </Text>

        {/* Loader */}
        {IsLoadPortfolioList && (
          <Box className="flex h-full items-center justify-center">
            <SpinnerLoader />
          </Box>
        )}

        {!IsLoadPortfolioList && (
          <Box className="mt-2">
            {PortfolioList.length > 0 &&
              PortfolioList.map((item) => (
                <PortfolioItem key={item.title} item={item} />
              ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
