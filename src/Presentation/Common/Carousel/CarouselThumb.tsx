import React from "react";

import { Box, Image } from "@chakra-ui/react";

import { ImageProperty } from "../../../Common/Interface/ImageProperty";

type PropType = {
  selected: boolean;
  onClickExpand: () => void;
  onClickUpdateSelected: () => void;
  image: ImageProperty | undefined;
};

export const CarouselThumb: React.FC<PropType> = (props) => {
  const { selected, image, onClickExpand, onClickUpdateSelected } = props;

  return (
    <Box
      className="w-14 px-1 hover:cursor-pointer"
      onClick={selected ? onClickExpand : onClickUpdateSelected}
    >
      <Box
        className={`rounded-md ${selected ? "bg-transparent" : "bg-black opacity-50"}`}
      >
        <Image
          fit="cover"
          alt={image?.alt}
          src={image?.image}
          className="rounded-md"
        />
      </Box>
    </Box>
  );
};
