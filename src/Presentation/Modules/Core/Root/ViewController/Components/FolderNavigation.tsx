import React from "react";

import { Box, Image, Text } from "@chakra-ui/react";

import Images from "../../../../../../Common/Core/Images";
import Navigation from "../../../../../../Common/Core/Utils/Navigation";
import NavigationPathItem from "../../../../../../Common/Interface/NavigationPathItem";

interface props {
  navItem: NavigationPathItem;
}

export const FolderNavigation: React.FC<props> = (props) => {
  const { navItem } = props;

  const { navigateToPath, getCurrentPath } = Navigation();

  const isActiveRoute = getCurrentPath() === navItem.path;

  return (
    <Box
      className="mr-2 flex flex-row items-center rounded-sm px-3 py-1 hover:cursor-pointer"
      backgroundColor={isActiveRoute ? "#AF8E25" : ""}
      onClick={() => navigateToPath({ path: navItem.path })}
    >
      <Image
        src={isActiveRoute ? Images.ic_folder_white : Images.ic_folder_orange}
        className="mr-2 w-4"
      />

      <Text className="font-sfpro text-sm font-medium text-white">
        {navItem.title}
      </Text>
    </Box>
  );
};
