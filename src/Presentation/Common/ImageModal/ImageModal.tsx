import React from "react";
import parse from "html-react-parser";
import { Box, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

import { ImageProperty } from "../../../Common/Interface/ImageProperty";

import ImageModalControl from "./ImageModalControl";

interface props {
  key: string;
  title: string;
  description: string;
  isOpen: boolean;
  windowWidth: number;
  image: ImageProperty;

  handleOnClose: () => void;
  handleOnTapNext: () => void;
  handleOnTapPrev: () => void;
}

const ImageModal: React.FC<props> = (props) => {
  const { key, title, description, isOpen, windowWidth, image } = props;
  const { handleOnClose, handleOnTapNext, handleOnTapPrev } = props;

  return (
    <Modal key={key} onClose={handleOnClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth={windowWidth - windowWidth / 3.5}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" justifyContent="space-between">
            <ImageModalControl mr={2} handleOnClick={handleOnTapPrev} label="<" />
            <Image maxW={windowWidth / 2} src={image.image} objectFit="contain" />
            <ImageModalControl ml={2} handleOnClick={handleOnTapNext} label=">" />
          </Box>
        </ModalBody>
        <ModalFooter width="100%" display="flex" justifyContent="flex-start">
          <Text width="100%" mr={10} ml={10}>
            {parse(description)}
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
