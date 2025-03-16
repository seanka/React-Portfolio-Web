import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import AboutViewModel from "../ViewModel/AboutViewModel";

import { AboutSectionView } from "./Component/AboutSectionView";

export const AboutViewController: React.FC = () => {
  const aboutVM = AboutViewModel();
  const { AboutSections, requestAboutSections } = aboutVM;

  useEffect(() => {
    requestAboutSections();
  }, []);

  return (
    <Box className="h-screen px-6 py-4">
      {AboutSections.map((item) => (
        <AboutSectionView key={item.id} section={item} aboutVM={aboutVM} />
      ))}
    </Box>
  );
};
