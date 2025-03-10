import React, { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface props {
  children: ReactNode;
  onCloseModal: () => void;
}

export const FullScreenModalView: React.FC<props> = (props) => {
  const { children, onCloseModal } = props;

  return (
    <>
      {/* Background Overlay Container */}
      <Box
        className="fixed top-0 left-0 z-40 h-lvh w-lvw bg-black opacity-90"
        onClick={onCloseModal}
      />

      {/* Container children, ensure located in the center of the screen */}
      <Box
        className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center"
        onClick={onCloseModal}
      >
        {children}
      </Box>
    </>
  );
};
