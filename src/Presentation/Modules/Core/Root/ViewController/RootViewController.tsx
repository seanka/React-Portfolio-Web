import React, { useEffect } from "react";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { TopBar } from "./Components/TopBar";
import { SideBar } from "./Components/SideBar";

import RootViewModel from "../ViewModel/RootViewModel";
import AnimationTransform from "../../../../../Common/Core/Utils/AnimationTransform";
import Navigation from "../../../../../Common/Core/Utils/Navigation";
import NavigationPath from "../../../../../Common/Core/NavigationPath";

export const RootViewController: React.FC = () => {
  const rootVM = RootViewModel();
  const sideBarState = rootVM.getSideBarState();

  const navigation = Navigation();

  const slideBreakpoint = useBreakpointValue({
    sm: "100%",
    md: "20%",
    lg: "15%",
  });

  useEffect(() => {
    if (navigation.getCurrentPath() == null) {
      navigation.navigateToPath(NavigationPath.home);
    }
  }, []);

  return (
    <Box className="flex h-screen flex-row">
      <Box className="w-screen bg-[#2E2E2E]">
        <TopBar handleOnClickExtendButton={() => rootVM.updateSideBarState()} />

        <Box className="mt-[44px] flex flex-row">
          {/*
            Sidebar component
            On small screen (default) it will take 100% width, only side bar with no outlet
            Larger than md: 20%, Larger than lg: 15%
          */}
          <Box className="w-full md:w-[20%] lg:w-[15%]">
            <SideBar
              animation={`${sideBarState ? AnimationTransform.slide("-100%", "0%") : AnimationTransform.slide("0%", "-100%")} 0.5s ease-in-out  forwards`}
            />
          </Box>

          {/*
            Outlet Component
            On small screen, width takes 100% when sidebar is closed, otherwise when the sidebar is opened
            Larger than md: located next to the sidebar with dynamic width and dynamic margin left
          */}
          <Box
            className={`${sideBarState ? "absolute hidden md:ml-[20%] md:w-[calc(100%-20%)] lg:ml-[15%] lg:w-[calc(100%-15%)]" : "w-full"} absolute h-[calc(100%-44px)] overflow-y-scroll bg-[#1E1E1E] md:block`}
            animation={`${
              sideBarState
                ? AnimationTransform.reshape(
                    "100%",
                    `calc(100% - ${slideBreakpoint})`,
                    "0%",
                    `${slideBreakpoint}`,
                  )
                : AnimationTransform.reshape(
                    `calc(100% - ${slideBreakpoint})`,
                    "100%",
                    `${slideBreakpoint}`,
                    "0%",
                  )
            } 0.5s ease-in-out forwards}`}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
