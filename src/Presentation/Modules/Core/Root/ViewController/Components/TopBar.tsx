import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { WindowButtons } from "./WindowButtons";

import Images from "../../../../../../Common/Core/Images";

interface props {
  handleOnClickExtendButton: () => void;
}

export const TopBar: React.FC<props> = (props) => {
  const { handleOnClickExtendButton } = props;

  return (
    <>
      <Box className="flex w-screen flex-row items-center bg-[#2E2E2E] px-2.5 py-3">
        <WindowButtons />

        <Image
          src={Images.ic_sidebar_gray}
          className="ml-5 w-5"
          onClick={handleOnClickExtendButton}
        />
      </Box>
    </>
  );
};
