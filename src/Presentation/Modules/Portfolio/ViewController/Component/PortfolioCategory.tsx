import React from "react";
import { Text } from "@chakra-ui/react";

import { PortfolioCategoryItem } from "../../../../../Domain/Entities/Portfolio/PortfolioCategoryItem";

interface props {
  category: PortfolioCategoryItem;
}

export const PortfolioCategory: React.FC<props> = (props) => {
  const { category } = props;

  return (
    <Text
      noOfLines={1}
      className="font-sfpro text-sm font-bold text-ellipsis text-white"
    >
      {category.title}
    </Text>
  );
};
