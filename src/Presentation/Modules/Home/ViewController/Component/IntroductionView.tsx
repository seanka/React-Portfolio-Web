import { Box, Image, Text } from "@chakra-ui/react";

import { IntroductionCart } from "./IntroductionComponent/IntroductionCard";

import { HomeIntroduction } from "../../../../../Domain/Entities/Home/HomeIntroduction";

interface props {
  data: HomeIntroduction;
}

export const IntroductionView: React.FC<props> = (props) => {
  const { data } = props;

  return (
    <Box className="flex h-full w-full flex-col">
      {/* Headline Section */}
      <Box className="mt-4 flex flex-col items-center">
        <Text className="font-sfpro pb-1.5 text-4xl font-extrabold text-white md:pb-3 md:text-5xl">
          {data.greeting}
        </Text>
        <Text className="font-sfpro pb-0.5 text-2xl font-semibold text-white md:pb-1 md:text-4xl">
          {data.headline}
        </Text>
      </Box>

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
      <Box className="mt-auto flex w-full flex-col items-center justify-center md:flex-row md:items-end">
        {/* Personal Section */}
        <Box className="order-2 mb-3 flex h-[80%] w-full flex-row justify-evenly md:order-none md:w-auto md:flex-col md:items-start">
          {data.demographic?.map((item) => (
            <IntroductionCart
              key={item.title}
              data={item}
              iconPosition="right"
            />
          ))}
        </Box>

        {/* Image */}
        <Box className="order-1 mb-2 md:order-none md:mx-2.5 md:mb-0">
          <Image src={data.coverImage} className="w-[260px] md:w-[380px]" />
        </Box>

        <Box className="order-2 mb-3 flex h-[80%] w-full flex-row justify-around px-10 md:order-none md:w-auto md:flex-col md:items-end md:justify-evenly md:px-0">
          {data.interest?.map((item) => (
            <IntroductionCart
              key={item.title}
              data={item}
              iconPosition="left"
            />
          ))}
        </Box>
      </Box>

      {/* Footer Contact Section */}
      <Box className="flex h-10 w-full flex-row items-center justify-between bg-[#343434] px-5">
        <Text className="font-sfpro text-sm font-semibold text-white md:font-extrabold">
          Thanks for your Visit!
        </Text>

        {/* Contact Icons */}
        <Box className="flex flex-row">
          {data.listContact?.map((contact, index) => {
            const firstItem = index === 0;
            const lastItem = index + 1 === data.listContact?.length;

            return (
              <Box
                key={contact.image}
                className={`hover:cursor-pointer ${lastItem ? "mr-[20px]" : "mr-[10px]"} ${firstItem ? "ml-[20px]" : "ml-[10px]"} ${lastItem ? "md:mr-[40px]" : "md:mr-[20px]"} ${firstItem ? "md:ml-[40px]" : "md:ml-[20px]"}`}
                onClick={() => window.open(contact.url, "_blank")}
              >
                <Image src={contact.image} className="w-[24px] md:w-[28px]" />
              </Box>
            );
          })}
        </Box>

        <iframe
          width="14px"
          src="https://lottie.host/embed/0743b971-5cad-4416-a194-4901eb11ff8b/jIrUn3ydMu.lottie"
        ></iframe>
      </Box>
    </Box>
  );
};
