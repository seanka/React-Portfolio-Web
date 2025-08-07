import React, { useEffect } from "react";

import { Box, Image, Text } from "@chakra-ui/react";

import { PortfolioItemView } from "./Component/PortfolioItemView";
import { PortfolioCategoryView } from "./Component/PortfolioCategoryView";
import { SpinnerLoader } from "../../../Common/SpinnerLoader/SpinnerLoader";

import PortfolioViewModel from "../ViewModel/PortfolioViewModel";

import Navigation from "../../../../Common/Core/Utils/Navigation";
import { PortfolioCategoryChildView } from "./Component/PortfolioCategoryChildView";
import Images from "../../../../Common/Core/Images";

export const PortfolioViewController: React.FC = () => {
  const portfolioVM = PortfolioViewModel();
  const {
    Portfolio,
    PortfolioData,
    ActivePortfolio,
    PrevActiveCategory,
    IsLoadPortfolioList,
    PortfolioCategoryData,
    updateExpanded,
    setPortfolioData,
    currentItemActive,
    updateActivePortfolio,
    requestPortfolioV2Data,
    requestPortfolioCategoryV2,
  } = portfolioVM;

  const navigation = Navigation();
  const urlParam = navigation.getUrlParam();

  useEffect(() => {
    requestPortfolioCategoryV2();
  }, []);

  useEffect(() => {
    // On init :: Automatically set selected item to first

    if (Object.keys(urlParam).length === 0 && Portfolio.length > 0) {
      const firstItem = Portfolio[0];

      if (firstItem && firstItem.id && firstItem.data) {
        updateActivePortfolio(firstItem.id, firstItem.data.data![0].title);
      }
    }
  }, [Portfolio]);

  useEffect(() => {
    const { Category, Item } = ActivePortfolio;

    if (!Category || !Item || IsLoadPortfolioList) return;

    // Only refetch data when the category has changed
    const updateCategory = PrevActiveCategory.current !== Category;
    if (updateCategory) {
      requestPortfolioV2Data();
      PrevActiveCategory.current = Category;
    }

    navigation.navigateToPath({
      path: `/portfolio/${Category}/${Item}`,
      replace: true,
    });

    // Find correct item
    const matched = PortfolioCategoryData.current.find(
      (data) => data.id === Item,
    );
    setPortfolioData(matched ?? {});
  }, [ActivePortfolio, IsLoadPortfolioList]);

  return (
    <Box className="flex h-full flex-row">
      {/* Category List Tab */}
      <Box className="w-[30%] overflow-y-scroll bg-[#222222] md:w-[25%] lg:w-[20%]">
        <Text className="font-sfpro py-2 pl-4 text-xs text-[#939393]">
          Lists
        </Text>

        {/* Separator */}
        <Box className="mb-2 h-[1px] w-full bg-[#939393]" />

        {Portfolio?.map((category) => (
          <Box key={category.data?.position} className="my-1 px-3 py-2 md:px-4">
            {/* Category Title */}
            <Box className="flex flex-row items-center align-middle">
              <Image
                height="16px"
                src={Images.ic_arrow_white}
                onClick={() => updateExpanded(category)}
                className={`transition-transform duration-300 ${category.data?.expanded ? "rotate-90" : "rotate-0"}`}
              />
              <PortfolioCategoryView
                key={category.id}
                title={category.data?.title}
              />
            </Box>

            {/* Category Child */}
            {category.data?.expanded &&
              category.data?.data?.map((item) => (
                <Box
                  key={item.title}
                  className="my-1 mt-2 ml-5 rounded-lg px-1.5 py-2 hover:cursor-pointer md:pl-3"
                  backgroundColor={
                    currentItemActive(category.id, item.title)
                      ? "#AF8E25"
                      : "transparent"
                  }
                  onClick={() => updateActivePortfolio(category.id, item.title)}
                >
                  <PortfolioCategoryChildView title={item.title} />
                </Box>
              ))}
          </Box>
        ))}
      </Box>

      {/* Content */}
      <Box className="flex h-full w-full flex-col overflow-y-scroll bg-[#1E1E1E] px-6 pt-8">
        <Text className="font-sfpro text-xl font-extrabold text-white">
          {PortfolioData.id}
        </Text>

        {/* Loader */}
        {IsLoadPortfolioList && (
          <Box className="flex h-full items-center justify-center">
            <SpinnerLoader />
          </Box>
        )}

        {!IsLoadPortfolioList && (
          <Box className="mt-2">
            <PortfolioItemView item={PortfolioData.data ?? {}} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
