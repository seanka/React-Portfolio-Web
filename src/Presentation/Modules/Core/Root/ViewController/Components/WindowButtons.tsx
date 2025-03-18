import React from "react";

import { Box } from "@chakra-ui/react";

const buttonColors = ["#FE5F56", "#FEBB2E", "#27C93F"];

export const WindowButtons: React.FC = () => {
  return (
    <>
      <Box className="flex w-16 flex-row justify-evenly">
        {buttonColors.map((color) => {
          return (
            <Box key={color} bg={color} className="h-3 w-3 rounded-full"></Box>
          );
        })}
      </Box>
    </>
  );
};
