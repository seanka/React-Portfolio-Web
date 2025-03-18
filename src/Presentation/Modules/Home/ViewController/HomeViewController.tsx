import React, { useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import HomeViewModel from "../ViewModel/HomeViewModel";

import { CountSectionView } from "./Component/CountSectionView";
import { PersonalSectionView } from "./Component/PersonalSectionView";
import { SpinnerLoader } from "../../../Common/SpinnerLoader/SpinnerLoader";

export const HomeViewController: React.FC = () => {
  const homeVM = HomeViewModel();
  const { IsLoading, HomeData } = homeVM;

  useEffect(() => {
    homeVM.requestHomeData();
  }, []);

  return (
    <Box className="flex h-full flex-col items-center justify-between px-6 py-4">
      {IsLoading && (
        <Box className="flex h-full items-center justify-center">
          <SpinnerLoader />
        </Box>
      )}

      {/* Headline Section */}
      {!IsLoading && (
        <Box className="flex flex-col items-center">
          <Text className="font-sfpro pb-1.5 text-4xl font-extrabold text-white md:pb-3 md:text-5xl">
            {HomeData.data?.greetingMessage}
          </Text>
          <Text className="font-sfpro pb-0.5 text-2xl font-semibold text-white md:pb-1 md:text-4xl">
            {HomeData.data?.headline}
          </Text>
        </Box>
      )}

      {/* Image and customized sections
      In default screen (small) layout :
      image
      personal section 1 - personal section 2 - personal section 3
      count section 1 - count section 2 - count section 3
      
      In larger screen layout :
      personal section 1 - image - count section 1
      personal section 2 - image - count section 2
      personal section 3 - image - count section 3
      */}
      <Box className="flex w-full flex-col items-center justify-between md:flex-row md:items-end">
        {/* Personal Section */}
        <Box className="order-2 mb-3 flex h-[80%] w-full flex-row justify-evenly md:order-none md:mb-0 md:w-auto md:flex-col md:items-start">
          {HomeData.data?.personalSection?.map((item) => (
            <PersonalSectionView key={item.title} data={item} />
          ))}
        </Box>

        {/* Image */}
        <Box className="order-1 mb-3 md:order-none md:mb-0">
          <Image
            src={HomeData.data?.image}
            className="w-[280px] md:w-[400px]"
          />
        </Box>

        <Box className="order-2 flex h-[80%] w-full flex-row justify-between md:order-none md:w-auto md:flex-col md:items-end md:justify-evenly">
          {HomeData.data?.countSection?.map((item) => (
            <CountSectionView key={item.title} data={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
