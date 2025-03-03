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

  const slideBreakpoint = useBreakpointValue({
    sm: "100%",
    md: "20%",
    lg: "15%",
  });

  return (
    <Box className="flex h-screen flex-row overflow-hidden">
      <Box className="w-screen">
        <TopBar handleOnClickExtendButton={() => rootVM.updateSideBarState()} />

        <Box className="relative flex flex-row">
          {/*
            Sidebar component
            On small screen (default) it will take 100% width, only side bar with no outlet
            Larger than md: 20%, Larger than lg: 15%
          */}
          <Box className="w-[100%] md:w-[20%] lg:w-[15%]">
            <SideBar
              animation={`${sideBarState ? AnimationTransform.slide("-100%", "0%") : AnimationTransform.slide("0%", "-100%")} 0.5s ease-in-out forwards`}
            />
          </Box>

          {/*
            Outlet Component
            Width always take 100%, small screen (default) logic -> hidden when side bar is opened (side bar takes 100%), show when side bar is closed (side bar takes 0%)
            Larger than md: side bar always shows and
          */}
          <Box
            className={`${sideBarState ? "hidden" : ""} absolute w-[100%] max-w-screen flex-grow bg-amber-400 md:block`}
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
