import { Box, Text } from "@chakra-ui/react";

import { FolderNavigation } from "./FolderNavigation";

import RouteNavigationItems from "../../../../../../Common/Core/NavigationPath";

interface props {
  animation: {};
}

export const SideBar: React.FC<props> = (props) => {
  const { animation } = props;

  return (
    <Box
      animation={animation}
      className="h-screen w-full bg-[#2E2E2E] p-2.5 sm:w-[30%] md:w-[20%]"
    >
      <Box className="ml-2">
        <Text className="font-sfpro text-left text-xs font-medium text-zinc-500">
          iCloud
        </Text>
      </Box>

      <Box className="mt-2">
        {RouteNavigationItems.map((item) => (
          <FolderNavigation key={item.title} navItem={item} />
        ))}
      </Box>
    </Box>
  );
};
