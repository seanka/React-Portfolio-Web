import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

import { usePageRefresh } from "../../Common/Utils/usePageRefresh";

import { RouteNavigation } from "../../Common/Enum/RouteNavigation";
import { PortfolioKey } from "../../Common/Enum/LocalData/PortfolioKey";
import { Text } from "@chakra-ui/react";

function Root() {
  const isPageReloaded = usePageRefresh();

  useEffect(() => {
    if (isPageReloaded) {
      localStorage.removeItem(PortfolioKey.birdDecoCoordinates);
      localStorage.removeItem(PortfolioKey.cloudDecoCoordinates);
    }
  }, [isPageReloaded]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default Root;
