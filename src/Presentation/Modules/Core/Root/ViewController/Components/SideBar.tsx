import { Box, Text } from "@chakra-ui/react";

import { FolderNavigation } from "./FolderNavigation";

import RouteNavigationItems from "../../../../../../Common/Core/NavigationPath";

interface props {
  animation: {};
}

export const SideBar: React.FC<props> = (props) => {
  const { animation } = props;

  return (
    <Box animation={animation} className="h-screen bg-[#2E2E2E] p-2.5">
      <Text className="font-sfpro pl-2 text-left text-xs font-medium text-zinc-500">
        iCloud
      </Text>

      <Box className="mt-2">
        {RouteNavigationItems.map((item) => (
          <FolderNavigation key={item.title} navItem={item} />
        ))}
      </Box>
    </Box>
  );
};
