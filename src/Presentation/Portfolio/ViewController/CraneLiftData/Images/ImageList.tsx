import React, { useState } from "react";
import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

import { AspectRatio } from "../../../../../Common/Interface/AspectRatio";
import { ImageProperty } from "../../../../../Common/Interface/ImageProperty";

import ImagePreview from "./ImagePreview";
import ImageCarousel from "../../../../Common/Modals/ImageCarousel";

import useWindowDimension from "../../../../../Common/Utils/useWindowDimension";
import ImageControl from "../../../../Common/Modals/ImageControl";

interface props {
  description: string;
  images: ImageProperty[];
}

const ImageList: React.FC<props> = (props) => {
  const { description, images } = props;
  const { width, height } = useWindowDimension();

  const [imageIndex, setImageIndex] = useState(-1);

  const onClose = () => setImageIndex(-1);
  const onOpen = (index: number) => setImageIndex(index);

  const handleOnTapNext = (index: number) => {
    if (index === images.length - 1) return;

    setImageIndex(index + 1);
  };

  const handleOnTapPrev = (index: number) => {
    if (index === 0) return;

    setImageIndex(index - 1);
  };

  const MODAL_CONTENT_ASPECT_RATIO: AspectRatio = {
    small: { width: 100, height: 50 },
    med: { width: 200, height: 100 },
    big: { width: 400, height: 200 },
  };

  const MODAL_CONTENT_MAX_WIDTH = [
    width - MODAL_CONTENT_ASPECT_RATIO.small.width,
    null,
    width - MODAL_CONTENT_ASPECT_RATIO.med.width,
    null,
    width - MODAL_CONTENT_ASPECT_RATIO.big.width,
  ];

  const MODAL_CONTENT_MAX_HEIGHT = [
    height - MODAL_CONTENT_ASPECT_RATIO.small.height,
    null,
    height - MODAL_CONTENT_ASPECT_RATIO.med.height,
    null,
    height - MODAL_CONTENT_ASPECT_RATIO.big.height,
  ];

  return images.map((image, index) => {
    return (
      <>
        {getImageSlices(width, index, image, onOpen)}

        <Modal key={index} onClose={onClose} isOpen={imageIndex === index} isCentered>
          <ModalOverlay />
          <ModalContent maxW={MODAL_CONTENT_MAX_WIDTH} maxH={MODAL_CONTENT_MAX_HEIGHT}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody alignSelf="center" justifyItems="center">
              <Box display="flex">
                <ImageControl mr={2} handleOnClick={() => handleOnTapPrev(index)} label="-" />
                <ImageCarousel index={index} windowWidth={width} image={image} />
                <ImageControl ml={2} handleOnClick={() => handleOnTapNext(index)} label="+" />
              </Box>
            </ModalBody>
            <ModalFooter alignSelf="center">
              <Text>{description}</Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  });
};

export default ImageList;

function getImageSlices(width: number, index: number, image: ImageProperty, onOpen: (index: number) => void) {
  if (width < 768) {
    if (index >= 2) return;

    return <ImagePreview index={index} image={image} onOpen={onOpen} />;
  } else if (width < 1280) {
    if (index >= 3) return;

    return <ImagePreview index={index} image={image} onOpen={onOpen} />;
  } else {
    if (index >= 4) return;

    return <ImagePreview index={index} image={image} onOpen={onOpen} />;
  }
}
