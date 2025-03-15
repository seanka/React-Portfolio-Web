import React from "react";
import { Text } from "@chakra-ui/react";

import { PortfolioCategory } from "../../../../../Domain/Entities/Portfolio/PortfolioCategory";

interface props {
  category: PortfolioCategory | undefined;
}

export const PortfolioCategoryView: React.FC<props> = (props) => {
  const { category } = props;

  return (
    <Text
      noOfLines={1}
      className="font-sfpro text-sm font-bold text-ellipsis text-white"
    >
      {category?.title}
    </Text>
  );
};
