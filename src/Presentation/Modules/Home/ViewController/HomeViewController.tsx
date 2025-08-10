import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import HomeViewModel from "../ViewModel/HomeViewModel";

import { HomeEnum } from "../../../../Common/Enum/Home/HomeEnum";
import { useScrollSnap } from "../../../../Common/Core/Hooks/useScrollSnap";

import { IntroductionView } from "./Component/IntroductionView";
import { SpinnerLoader } from "../../../Common/SpinnerLoader/SpinnerLoader";

const MAX_COMPONENT_HEIGHT = window.innerHeight - 44;

export const HomeViewController: React.FC = () => {
  const homeVM = HomeViewModel();
  const { IsLoading, Home } = homeVM;

  const { handleScroll } = useScrollSnap(MAX_COMPONENT_HEIGHT, 50);

  useEffect(() => {
    homeVM.requestHomeData();
  }, []);

  return (
    <Box
      onScroll={handleScroll}
      className="flex h-full flex-col overflow-y-scroll"
    >
      {IsLoading && (
        <Box className="flex h-full items-center justify-center">
          <SpinnerLoader />
        </Box>
      )}

      {!IsLoading &&
        Home &&
        Home.map((section) => (
          <Box
            key={section.id}
            h={`${MAX_COMPONENT_HEIGHT}px`}
            className="flex shrink-0 flex-col"
          >
            {/* Dynamic Home Section */}
            {section.id === HomeEnum.INTRODUCTION && section.data && (
              <IntroductionView data={section.data} />
            )}

            {section.id === "SECTION_TWO" && <Text>section two</Text>}
          </Box>
        ))}
    </Box>
  );
};
