import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import ContactViewModel from "../ViewModel/ContactViewModel";

import { SocialMediaView } from "./Component/SocialMediaView";
import { SpinnerLoader } from "../../../Common/SpinnerLoader/SpinnerLoader";
import { ContactInformationView } from "./Component/ContactInformationView";

export const ContactViewController: React.FC = () => {
  const contactVM = ContactViewModel;
  const { IsLoading, ContactData, requestContactData } = contactVM();

  useEffect(() => {
    requestContactData();
  }, []);

  return (
    <Box className="h-screen px-3 py-2 md:px-10">
      {IsLoading && (
        <Box className="flex h-full items-center justify-center">
          <SpinnerLoader />
        </Box>
      )}

      {/*
Smaller screen layout :
Thanks for
Let's Connect
Cards

Larger screen layout :
Thanks         Let's Connect
for visit      Cards
*/}
      {!IsLoading && (
        <Box className="flex h-full flex-col items-center justify-between md:flex-row">
          {/* Thanks for visit container */}
          <Box className="flex flex-col items-center md:max-w-[370px] md:items-start">
            <Text className="font-sfpro text-6xl font-extrabold text-white md:text-8xl">
              Thanks For
            </Text>
            <Box className="flex w-full flex-row md:flex-row">
              <Text className="font-sfpro text-6xl font-extrabold text-[#AF8E25] md:text-8xl">
                Your&nbsp;
              </Text>
              <Text className="font-sfpro text-6xl font-extrabold text-white md:text-8xl">
                Visit!
              </Text>
            </Box>
          </Box>

          {/* Lets Connect Container */}
          <Box className="mt-40 flex flex-col items-end md:mt-0 md:w-[36%]">
            <Box className="flex w-full flex-row items-center justify-start md:justify-end">
              <Box className="order-2 ml-2 flex flex-col items-start md:order-1 md:mr-2 md:ml-0 md:items-end">
                {/* Rich Text */}
                <Box className="flex flex-row">
                  <Text className="font-sfpro text-4xl font-bold text-white md:text-5xl">
                    Let's&nbsp;
                  </Text>
                  <Text className="font-sfpro text-4xl font-bold text-[#AF8E25] md:text-5xl">
                    Connect&nbsp;
                  </Text>
                  <Text className="font-sfpro text-4xl font-bold text-white md:text-5xl">
                    and
                  </Text>
                </Box>

                {/* Rich Text */}
                <Box className="flex flex-row">
                  <Text className="font-sfpro text-4xl font-bold text-white md:text-5xl">
                    Have a&nbsp;
                  </Text>
                  <Text className="font-sfpro text-4xl font-bold text-[#AF8E25] md:text-5xl">
                    Chat
                  </Text>
                </Box>
              </Box>

              <Text className="order-1 text-5xl md:order-2 md:text-6xl">
                ☕️
              </Text>
            </Box>

            {/* Content */}
            <Box className="grid w-full grid-cols-3 gap-4 py-5">
              {ContactData?.data?.socialMedia?.map((item) => (
                <SocialMediaView key={item.platform} data={item} />
              ))}
            </Box>

            <Box
              border="1px"
              borderColor="#AF8E25"
              className="grid w-full grid-cols-2 gap-3 rounded-2xl py-5"
            >
              {ContactData?.data?.contactInformation?.map((item) => (
                <ContactInformationView key={item.platform} data={item} />
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
