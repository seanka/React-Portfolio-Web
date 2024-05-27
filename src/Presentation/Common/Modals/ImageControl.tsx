import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface props {
  ml?: number;
  mr?: number;
  label: string;
  handleOnClick: () => void;
}

const ImageControl: React.FC<props> = (props) => {
  const { ml = 0, mr = 0, label, handleOnClick } = props;

  return (
    <Box mr={mr} ml={ml} onClick={handleOnClick} p={1} alignItems="center" display="flex" borderRadius={10}>
      <Text as="b" color="black" fontSize={20}>
        {label}
      </Text>
    </Box>
  );
};

export default ImageControl;
