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
      <Navigate to={RouteNavigation.portfolio} />
      <Text className="font-sfpro text-3xl underline">HALO</Text>
      <Text className="text-3xl underline">HALO</Text>
      <Text
        style={{ fontFamily: "SFPro" }}
        className="font-sfpro text-3xl underline"
      >
        the quick brown fox jumps over the lazy dog
      </Text>
      <Text className="text-3xl underline">
        the quick brown fox jumps over the lazy dog
      </Text>
      <Outlet />
    </>
  );
}

export default Root;
