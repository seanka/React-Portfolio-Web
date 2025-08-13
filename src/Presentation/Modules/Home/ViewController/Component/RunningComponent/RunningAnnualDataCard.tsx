import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { RunningData } from "../../../../../../Domain/Entities/Home/HomeRunning";

import NumberExtension from "../../../../../../Common/Core/Utils/NumberExtension";

import { RunningRaceCard } from "./RunningRaceCard";
import { FullScreenModalView } from "../../../../../Common/FullScreenModal/FullScreenModalView";

interface props {
  data: RunningData;
}

export const RunningAnnualDataCard: React.FC<props> = (props) => {
  const { data } = props;

  const [Expanded, setExpanded] = useState<number>(-1);
  const [FullScreenImage, setFullScreenImage] = useState<string>("");

  return (
    <>
      {FullScreenImage !== "" && (
        <FullScreenModalView
          onCloseModal={() => {
            setFullScreenImage("");
          }}
        >
          <Image
            src={FullScreenImage}
            className="max-h-[85%] items-center justify-center"
          />
        </FullScreenModalView>
      )}

      <Box className="w-full">
        {/* Annual Data Information */}
        <Box className="mb-7 flex flex-row items-center justify-center">
          {/* Annual Mileage
          ##################
          Small layout screen
            Yearly Mileage
                Data
          
          Larger layout screen
          Yearly Mileage    Data
          */}
          <Box className="flex flex-col items-center md:flex-row">
            <Text className="text-center text-sm font-semibold text-white md:text-base">
              Yearly Mileage&nbsp;
            </Text>
            <Text className="text-xl font-bold text-white md:text-2xl">
              {NumberExtension.Format(data.mileage ?? 0)}km
            </Text>
          </Box>

          {/* Separator */}
          <Box className="mx-5 md:mx-10">
            <Text className="text-lg text-white">·</Text>
          </Box>

          {/* Peak Distance */}
          <Box className="flex flex-col items-center md:flex-row">
            <Text className="text-center text-sm font-semibold text-white md:mr-1 md:text-base">
              Peak Distance&nbsp;
            </Text>
            <Text className="text-xl font-bold text-white md:text-2xl">
              {NumberExtension.Format(data.peak ?? 0)}km
            </Text>
          </Box>
        </Box>

        {/* Races */}
        {data && data.race && data.race.length > 0 && (
          <Box className="flex flex-col">
            {/* Title */}
            <Text className="text-center text-sm font-bold text-white">
              Races
            </Text>

            {/* Content
          Small Screen Layout
          ###################
                        Races
                     data 1 +
                     data 2 +
                     data 3 +
          
          Larger Screen Layout
          ####################
                Races     
          data 1 +  + data 2
          data 3 +  + data 4
          */}
            <Box className="mt-1.5 hover:cursor-pointer md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6">
              {data.race.map((race, index) => (
                <RunningRaceCard
                  key={index}
                  data={race}
                  oddData={index % 2 !== 0}
                  dataExpanded={index === Expanded}
                  onClickData={() => {
                    if (index === Expanded) {
                      setExpanded(-1);
                      return;
                    }

                    setExpanded(index);
                  }}
                  onClickImage={(image: string) => setFullScreenImage(image)}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};
