import React, { useEffect } from "react";

import { Box, Text } from "@chakra-ui/react";

import { PortfolioCategory } from "./Component/PortfolioCategory";

import PortfolioViewModel from "../ViewModel/PortfolioViewModel";
import Navigation from "../../../../Common/Core/Utils/Navigation";

export const PortfolioViewController: React.FC = () => {
  const portfolioVM = PortfolioViewModel();

  const navigation = Navigation();
  const urlParam = navigation.getUrlParam();

  useEffect(() => {
    portfolioVM.requestPortfolioCategory();
  }, []);

  useEffect(() => {
    /*
      Check whether the url param is empty
      If not empty, set active category automatically
    */
    if (Object.keys(urlParam).length !== 0) {
      if (urlParam["category"] === "") {
        return;
      }

      portfolioVM.updateActivePortfolioCategoryBasedOnParam(
        urlParam["category"]!,
      );
    }
  }, [portfolioVM.PortfolioCategory]);

  useEffect(() => {
    const activeCategory = portfolioVM.ActivePortfolioCategory;

    if (Object.keys(activeCategory).length === 0) {
      return;
    }

    portfolioVM.requestPortfolioList();
    navigation.navigateToPath({
      path: `/portfolio/${activeCategory.id}`,
      replace: true,
    });
  }, [portfolioVM.ActivePortfolioCategory]);

  return (
    <Box className="flex h-screen flex-row">
      {/* CATEGORY LISTS */}
      <Box className="h-screen w-0 bg-[#222222] sm:w-[30%] md:w-[20%]">
        <Text className="font-sfpro py-2 pl-4 text-xs text-[#939393]">
          Category List
        </Text>

        <Box className="h-[1px] w-full bg-[#939393]" />

        {portfolioVM.PortfolioCategory?.map((item) => (
          <Box
            key={item.id}
            className="my-2 mr-2 ml-2.5 rounded-lg px-6 py-4"
            backgroundColor={
              urlParam["category"] === item.id ? "#AF8E25" : "transparent"
            }
            onClick={() =>
              urlParam["category"] !== item.id
                ? portfolioVM.setActivePortfolioCategory(item)
                : null
            }
          >
            <PortfolioCategory key={item.id} category={item} />
          </Box>
        ))}
      </Box>

      {/* <Box className="h-screen w-[40%] bg-[#1E1E1E]">Test</Box> */}
    </Box>
  );
};
