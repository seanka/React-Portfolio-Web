import React from "react";
import { Text } from "@chakra-ui/react";

interface props {
  title: string | undefined;
}

export const PortfolioCategoryChildView: React.FC<props> = (props) => {
  const { title } = props;

  return (
    <Text
      noOfLines={1}
      className="font-sfpro text-xs font-medium text-ellipsis text-white md:text-sm"
    >
      {title}
    </Text>
  );
};
