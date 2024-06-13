import React, { useState } from "react";
import parse from "html-react-parser";
import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

import { ImageProperty } from "../../../../../../Common/Interface/ImageProperty";

import ImagePreview from "./ImagePreview";
import ImageCarousel from "../../../../../Common/Modals/ImageCarousel";

import useWindowDimension from "../../../../../../Common/Utils/useWindowDimension";
import ImageControl from "../../../../../Common/Modals/ImageControl";

interface props {
  title: string;
  description: string;
  images: ImageProperty[];
}

const ImageList: React.FC<props> = (props) => {
  const { title, description, images } = props;
  const { width } = useWindowDimension();

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

  return images.map((image, index) => {
    return (
      <>
        {getImageSlices(width, index, image, onOpen, images.length)}

        <Modal key={image.image} onClose={onClose} isOpen={imageIndex === index} isCentered>
          <ModalOverlay />
          <ModalContent maxW={width - width / 3.5}>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box display="flex" justifyContent="space-between">
                <ImageControl mr={2} handleOnClick={() => handleOnTapPrev(index)} label="<" />
                <ImageCarousel index={index} windowWidth={width} image={image} />
                <ImageControl ml={2} handleOnClick={() => handleOnTapNext(index)} label=">" />
              </Box>
            </ModalBody>
            <ModalFooter alignSelf="center">
              <Text>{parse(description)}</Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  });
};

export default ImageList;

function getImageSlices(width: number, index: number, image: ImageProperty, onOpen: (index: number) => void, imagesCount: number) {
  if (width < 768) {
    if (index >= 2) return;
    const blur = index >= 1 && imagesCount > 2;

    return <ImagePreview index={index} image={image} onOpen={onOpen} isBlur={blur} imagesCount={imagesCount - 1} />;
  } else if (width < 1280) {
    if (index >= 3) return;
    const blur = index >= 2 && imagesCount > 3;

    return <ImagePreview index={index} image={image} onOpen={onOpen} isBlur={blur} imagesCount={imagesCount - 2} />;
  } else {
    if (index >= 4) return;
    const blur = index >= 3 && imagesCount > 4;

    return <ImagePreview index={index} image={image} onOpen={onOpen} isBlur={blur} imagesCount={imagesCount - 4} />;
  }
}
