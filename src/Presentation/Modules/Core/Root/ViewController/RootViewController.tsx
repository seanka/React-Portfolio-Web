import React from "react";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { TopBar } from "./Components/TopBar";
import { SideBar } from "./Components/SideBar";

import RootViewModel from "../ViewModel/RootViewModel";
import AnimationTransform from "../../../../../Common/Core/Utils/AnimationTransform";

export const RootViewController: React.FC = () => {
  const rootVM = RootViewModel();
  const sideBarState = rootVM.getSideBarState();

  const slideBreakpoint = useBreakpointValue({ sm: "30%", md: "20%" });

  return (
    <Box className="flex flex-row">
      <Box>
        <TopBar handleOnClickExtendButton={() => rootVM.updateSideBarState()} />

        <Box className="flex flex-col">
          <SideBar
            animation={`${sideBarState ? AnimationTransform.slide("-100%", "0%") : AnimationTransform.slide("0%", "-100%")} 0.5s ease-in-out forwards`}
          />

          <Box
            className="sm:absolute"
            animation={
              sideBarState
                ? `${AnimationTransform.slide("0%", slideBreakpoint)} 0.5s ease-in-out forwards`
                : `${AnimationTransform.slide(slideBreakpoint, "0%")} 0.5s ease-in-out forwards`
            }
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
