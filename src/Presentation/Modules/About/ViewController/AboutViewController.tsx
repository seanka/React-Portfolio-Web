import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import AboutViewModel from "../ViewModel/AboutViewModel";

import Navigation from "../../../../Common/Core/Utils/Navigation";
import { AboutEnum } from "../../../../Common/Enum/About/AboutEnum";

import { SpinnerLoader } from "../../../Common/SpinnerLoader/SpinnerLoader";

import { WorkExpView } from "./Component/WorkExpView";
import { EducationView } from "./Component/EducationView";
import { TechSkillsView } from "./Component/TechSkillsView";

export const AboutViewController: React.FC = () => {
  const aboutVM = AboutViewModel();
  const {
    About,
    ActiveAbout,
    AboutEduData,
    AboutWorkData,
    AboutTechData,
    IsLoadAboutData,
    requestAboutV2,
    updateActiveAbout,
    requestAboutV2Data,
  } = aboutVM;

  const navigation = Navigation();
  const urlParam = navigation.getUrlParam();

  useEffect(() => {
    requestAboutV2();
  }, []);

  useEffect(() => {
    // On init :: Automatically set selected item to first
    if (Object.keys(urlParam).length === 0 && About.length > 0) {
      const firstItem = About[0];
      if (firstItem && firstItem.id && firstItem.data) {
        updateActiveAbout(firstItem);
      }
    }
  }, [About]);

  useEffect(() => {
    if (!ActiveAbout) return;

    const updateCategory =
      urlParam["category"] !== ActiveAbout.id?.toLowerCase();

    if (updateCategory) {
      requestAboutV2Data();
    }

    navigation.navigateToPath({
      path: `/about/${ActiveAbout.id?.toLowerCase()}`,
      replace: true,
    });
  }, [ActiveAbout]);

  return (
    <Box className="flex h-full flex-row">
      {/* Category List Tab */}
      <Box className="w-[30%] overflow-y-scroll bg-[#222222] md:w-[25%] lg:w-[20%]">
        <Text className="font-sfpro py-2 pl-4 text-xs text-[#939393]">
          Lists
        </Text>

        {/* Separator */}
        <Box className="mb-2 h-[1px] w-full bg-[#939393]" />
        {About?.map((category) => (
          <Box
            key={category.data?.position}
            onClick={() => updateActiveAbout(category)}
            className="my-2 mr-2 ml-2.5 rounded-lg px-4 py-4 hover:cursor-pointer md:pr-4 md:pl-3"
            backgroundColor={
              ActiveAbout?.id === category.id ? "#AF8E25" : "transparent"
            }
          >
            {/* Category Title */}
            <Text
              key={category.id}
              noOfLines={1}
              className="font-sfpro text-xs font-bold text-ellipsis text-white md:text-sm"
            >
              {category?.data?.title}
            </Text>
          </Box>
        ))}
      </Box>

      {/* Content */}
      <Box className="flex h-full w-full flex-col overflow-y-scroll bg-[#1E1E1E] px-6 pt-8">
        {/* Loader */}
        {IsLoadAboutData && (
          <Box className="flex h-full items-center justify-center">
            <SpinnerLoader />
          </Box>
        )}

        {/* Active category title */}
        {!IsLoadAboutData && (
          <Text className="font-sfpro text-xl font-extrabold text-white">
            {ActiveAbout?.data?.title}
          </Text>
        )}

        {/* Dynamic content depends on active category */}
        {!IsLoadAboutData &&
          AboutEduData.current &&
          ActiveAbout?.id === AboutEnum.EDUCATION && (
            <EducationView data={AboutEduData.current} />
          )}

        {!IsLoadAboutData &&
          AboutWorkData.current &&
          ActiveAbout?.id === AboutEnum.WORK_EXPERIENCE && (
            <WorkExpView data={AboutWorkData.current} />
          )}

        {!IsLoadAboutData &&
          AboutTechData.current &&
          ActiveAbout?.id === AboutEnum.TECHNICAL_SKILLS && (
            <TechSkillsView data={AboutTechData.current} />
          )}
      </Box>
    </Box>
  );
};
