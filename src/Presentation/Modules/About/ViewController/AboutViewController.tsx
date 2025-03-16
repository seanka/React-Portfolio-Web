import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

import AboutViewModel from "../ViewModel/AboutViewModel";

import { AboutSectionView } from "./Component/AboutSectionView";

import { SpinnerLoader } from "../../../Common/SpinnerLoader/SpinnerLoader";

export const AboutViewController: React.FC = () => {
  const aboutVM = AboutViewModel();
  const { IsLoading, AboutSections, requestAboutSections } = aboutVM;

  useEffect(() => {
    requestAboutSections();
  }, []);

  return (
    <Box className="h-screen px-6 py-4">
      {IsLoading && (
        <Box className="flex h-full items-center justify-center">
          <SpinnerLoader />
        </Box>
      )}

      {!IsLoading &&
        AboutSections.map((item) => (
          <AboutSectionView key={item.id} section={item} aboutVM={aboutVM} />
        ))}
    </Box>
  );
};
