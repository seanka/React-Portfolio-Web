import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { Portfolio } from "../../../../../Domain/Entities/Portfolio";

import { BoxAspectRatio } from "../../../../../Common/Interface/AspectRatio";
import useWindowDimension from "../../../../../Common/Utils/useWindowDimension";

import ImageModal from "../../../../Common/ImageModal/ImageModal";

import { PortfolioViewModel } from "../../../ViewModel/PortfolioViewModel";

interface props {
  data: Portfolio;
  portfolioVM: ReturnType<typeof PortfolioViewModel>;
}

const LiftImagesContainer: React.FC<props> = (props) => {
  const { data = {}, portfolioVM } = props;

  const { width } = useWindowDimension();

  const { getImageModal, onCloseImageModal, onOpenImageModal, onTapNextImageModal, onTapPrevImageModal } = portfolioVM;

  return data.images!.map((image, index) => {
    const { isBlur, plusText, isRenderPreview } = getImageProperty(width, index, data.images!.length);

    return (
      <>
        {isRenderPreview && (
          <Box mr={2} boxSize={PIC_SIZE} position="relative">
            <Image
              onClick={() => onOpenImageModal(image)}
              key={index}
              alt={image.alt}
              src={image.image}
              objectFit="cover"
              boxSize={PIC_SIZE}
              borderRadius={PIC_BORDER_RADIUS}
              filter={isBlur ? "blur(2px)" : ""}
            />

            <Text position="absolute" top="50%" left="50%" color="white" transform="translate(-50%,-50%)">
              {isBlur ? `+${plusText}` : ""}
            </Text>
          </Box>
        )}

        {getImageModal().alt === image.alt && getImageModal().image === image.image && (
          <ImageModal
            key={image.alt}
            title={data.title!}
            description={data.description!}
            isOpen={true}
            windowWidth={width}
            image={data.images![index]}
            handleOnClose={() => onCloseImageModal()}
            handleOnTapPrev={() => onTapPrevImageModal(index, data.images!)}
            handleOnTapNext={() => onTapNextImageModal(index, data.images!)}
          />
        )}
      </>
    );
  });
};

export default LiftImagesContainer;

function getImageProperty(width: number, index: number, imagesLength: number) {
  let plusText = 0;
  let isBlur = false;
  let isRenderPreview = true;

  if (width < 768) {
    isBlur = index >= 1 && imagesLength > 2;
    plusText = imagesLength - 1;
    if (index >= 2) isRenderPreview = false;
  } else if (width < 1280) {
    isBlur = index >= 2 && imagesLength > 3;
    plusText = imagesLength - 2;
    if (index >= 3) isRenderPreview = false;
  } else {
    isBlur = index >= 3 && imagesLength > 4;
    plusText = imagesLength - 3;
    if (index >= 4) isRenderPreview = false;
  }

  return { isBlur, isRenderPreview, plusText };
}

const PIC_ASPECT_RATIO: BoxAspectRatio = {
  small: { size: 10, borderRad: 4 },
  med: { size: 20, borderRad: 6 },
  big: { size: 40, borderRad: 8 },
};

const PIC_SIZE = [PIC_ASPECT_RATIO.small.size, null, PIC_ASPECT_RATIO.med.size, null, PIC_ASPECT_RATIO.big.size];

const PIC_BORDER_RADIUS = [PIC_ASPECT_RATIO.small.borderRad!, null, PIC_ASPECT_RATIO.med.borderRad!, null, PIC_ASPECT_RATIO.big.borderRad!];
