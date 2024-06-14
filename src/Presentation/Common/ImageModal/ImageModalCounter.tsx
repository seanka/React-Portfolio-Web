import React from "react";
import { Box } from "@chakra-ui/react";

interface props {
  index: number;
  imageCount: number;
  handleIndexChange: (index: number) => void;
}

const ImageModalCounter: React.FC<props> = (props) => {
  const { index, imageCount, handleIndexChange } = props;

  const handleOnTapNext = () => {
    if (index >= imageCount - 1) return;

    handleIndexChange(index + 1);
  };

  const handleOnTapPrev = () => {
    if (index == 0) return;

    handleIndexChange(index - 1);
  };

  return (
    <Box pl={4} pr={4} borderRadius={100} bgColor="yellow" display="flex" flexDirection="row">
      <Box onClick={handleOnTapPrev}>-</Box>
      {Array.from({ length: imageCount }).map((_, i) => (
        <Box p={1} onClick={() => handleIndexChange(i)}>
          <Box backgroundColor={index === i ? "white" : "gray"} borderRadius={10} width={2} height={2} />
        </Box>
      ))}
      <Box onClick={handleOnTapNext}>+</Box>
    </Box>
  );
};

export default ImageModalCounter;
