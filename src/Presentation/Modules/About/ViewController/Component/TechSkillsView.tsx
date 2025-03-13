import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import { TechSkills } from "../../../../../Domain/Entities/About/TechSkill";

import TechSkillViewModel from "../../ViewModel/TechSkillViewModel";
import ShuffleArray from "../../../../../Common/Core/Utils/ArrayRandomizer";

interface props {
  techSkillsData: TechSkills | undefined;
}

export const TechSkillsView: React.FC<props> = (props) => {
  const { techSkillsData } = props;

  const techSkillViewModel = TechSkillViewModel();
  const { SelectedTab, handleSelectedTab } = techSkillViewModel;

  const activeCategoryId = techSkillsData?.categories?.[SelectedTab]?.id ?? "";

  const shuffledIconsData = ShuffleArray(
    techSkillsData?.category_data?.[activeCategoryId]?.icons ?? [],
  );

  return (
    <Box className="mt-3">
      {!techSkillsData && <Text>Loading</Text>}

      {techSkillsData && (
        <Box className="flex h-[290px] flex-row md:h-[270px]">
          {/* Category Selection List */}
          <Box className="h-full flex-2 flex-col items-center pl-1">
            {techSkillsData.categories?.map((item, index) => {
              const itemPosition =
                index === 0
                  ? "FIRST_ITEM"
                  : index + 1 === techSkillsData.categories?.length
                    ? "LAST_ITEM"
                    : "MIDDLE_ITEM";

              return (
                // Dynamic floating separator position
                // Item is the first index, set the separator position on top
                // Item is last index, set the separator position on bottom
                // Item is center (not start and not end), set separator on middle
                <Box
                  key={item.id}
                  style={{
                    height: `${100 / techSkillsData.categories?.length!}%`,
                  }}
                  className={`flex flex-row ${
                    itemPosition === "FIRST_ITEM"
                      ? "items-start"
                      : itemPosition === "MIDDLE_ITEM"
                        ? "items-center"
                        : "items-end"
                  }`}
                >
                  {/* Dynamic rounded box corner,
                  Item is the first index, set only bottom right corner
                  Item is last index, set only top right corner
                  Item is center (not start and not end), set both top and bottom corner
                  */}
                  <Box
                    onClick={() => handleSelectedTab(index)}
                    className={`flex-2 rounded-s-xl px-2 py-4 ${
                      index === SelectedTab ? "bg-[#AF8E25]" : "bg-transparent"
                    } ${
                      itemPosition === "FIRST_ITEM"
                        ? "rounded-br-3xl"
                        : itemPosition === "MIDDLE_ITEM"
                          ? "rounded-e-3xl"
                          : "rounded-tr-3xl"
                    }`}
                  >
                    <Text className="font-sfpro text-sm font-bold text-white">
                      {item.title}
                    </Text>
                  </Box>

                  {/* Floating Separator between the categories and the content */}
                  <Box
                    className={`ml-[-1px] h-4 flex-1 ${index === SelectedTab ? "bg-[#AF8E25]" : "bg-transparent"}`}
                  />
                </Box>
              );
            })}
          </Box>

          {/* Content */}
          <Box
            borderWidth="1px"
            borderColor="#AF8E25"
            className={`flex-2 rounded-e-2xl lg:flex-8 ${
              SelectedTab === 0
                ? "rounded-bl-2xl"
                : SelectedTab + 1 === techSkillsData.categories?.length
                  ? "rounded-tl-2xl"
                  : "rounded-s-2xl"
            }`}
          >
            <Box className="grid h-full grid-cols-2 items-center gap-4 md:grid-cols-3">
              {shuffledIconsData.map((item) => (
                <Box
                  key={item.alt}
                  className={`${item.isLarger ? "row-span-2" : ""} flex items-center justify-center`}
                  // className="flex items-center justify-center"
                >
                  <Tooltip placement="top" label={item.hover}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className={`${item.isLarger ? "w-20" : "w-12"} rounded-lg bg-white`}
                      // className="w-10 rounded-lg bg-white"
                    />
                  </Tooltip>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );

  // return (
  //   <Box className="mt-3">
  //     {!techSkillsData && <Text>Loading</Text>}

  //     {techSkillsData && (
  //       <Tabs
  //         isFitted
  //         isManual
  //         variant="unstyled"
  //         onChange={(index) => handleSelectedTab(index)}
  //       >
  //         {/* Tab List */}
  //         <TabList className="mb-4">
  //           {techSkillsData.categories?.map((item, index) => (
  //             <Tab key={item.id}>
  //               <Text
  //                 className={`font-sfpro text-sm font-bold ${SelectedTab === index ? "text-[#AF8E25]" : "text-white"}`}
  //               >
  //                 {item.title}
  //               </Text>
  //             </Tab>
  //           ))}
  //         </TabList>
  //         <TabIndicator
  //           width="10px"
  //           className="mt-[-66px] h-0.5 w-2.5 bg-[#AF8E25] md:mt-[-48px]"
  //         />

  //         {/* Tab Panel */}
  //         <TabPanels className="mb-2">
  //           <Grid templateColumns="repeat(3, 1fr)" gap={6}>
  //             {techSkillsData.category_data?.[activeCategoryId]?.icons?.map(
  //               (item) => (
  //                 <GridItem
  //                   key={item.alt}
  //                   className="flex items-center justify-center"
  //                 >
  //                   <Tooltip placement="top" label={item.hover}>
  //                     <Image
  //                       src={item.image}
  //                       alt={item.alt}
  //                       className="w-10 rounded-lg bg-white"
  //                     />
  //                   </Tooltip>
  //                 </GridItem>
  //               ),
  //             )}
  //           </Grid>
  //         </TabPanels>
  //       </Tabs>
  //     )}
  //   </Box>
  // );
};
