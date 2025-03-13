import React from "react";
import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { Education } from "../../../../../Domain/Entities/About/Education";

import EducationViewModel from "../../ViewModel/EducationViewModel";
import ArrayExtension from "../../../../../Common/Core/Utils/ArrayExtension";

import { FormalEducationCard } from "./EducationComponent/FormalEducationCard";
import { CertificationEducationCard } from "./EducationComponent/CertificationEducationCard";

interface props {
  educationData: Education | undefined;
}

export const EducationView: React.FC<props> = (props) => {
  const { educationData } = props;

  const educationViewModel = EducationViewModel();
  const { SelectedTab, handleSelectedTab } = educationViewModel;

  const selectedTabData = (
    educationData?.[SelectedTab as keyof Education] ?? []
  ).map((item) => ({
    ...item,
    position: item.position ?? 999,
  }));

  const sortedData = ArrayExtension.SortArrayByPosition(selectedTabData);

  return (
    <Box className="mt-3">
      {!educationData && <Text>Loading</Text>}

      {selectedTabData && (
        <Box>
          <Tabs
            isFitted
            isManual
            variant="unstyled"
            onChange={(index) =>
              handleSelectedTab(index === 0 ? "school" : "certifications")
            }
          >
            {/* Tab List */}
            <TabList>
              <Tab color="white" _selected={{ color: "#AF8E25" }}>
                <Text className="font-sfpro text-sm font-bold">
                  Formal Education
                </Text>
              </Tab>
              <Tab color="white" _selected={{ color: "#AF8E25" }}>
                <Text className="font-sfpro text-sm font-bold">
                  Certifications and Licenses
                </Text>
              </Tab>
            </TabList>

            {/* Tab Indicator */}
            <TabIndicator className="mt-[-30px] h-0.5 w-2.5 bg-[#AF8E25]" />

            {/* Tab Panels */}
            <TabPanels>
              {/* Formal Education */}
              <TabPanel
                border="1px"
                borderTop="0px"
                borderColor="#AF8E25"
                className="rounded-br-2xl rounded-bl-2xl"
              >
                {sortedData.map((item) => (
                  <FormalEducationCard key={item.organization} data={item} />
                ))}
              </TabPanel>

              {/* Certifications and Licenses */}
              <TabPanel
                border="1px"
                borderTop="0px"
                borderColor="#AF8E25"
                className="rounded-br-2xl rounded-bl-2xl"
              >
                {sortedData.map((item) => (
                  <CertificationEducationCard
                    key={item.organization}
                    data={item}
                  />
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      )}
    </Box>
  );
};
