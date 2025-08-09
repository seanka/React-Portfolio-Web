import React, { useCallback } from "react";
import parse from "html-react-parser";
import { Box, Image, Text } from "@chakra-ui/react";

import { EmblaCarouselType } from "embla-carousel";

import { Portfolio } from "../../../../../Domain/Entities/Portfolio/Portfolio";

import { CarouselView } from "../../../../Common/Carousel/CarouselView";
import { CarouselThumb } from "../../../../Common/Carousel/CarouselThumb";

import PortfolioItemViewModel from "../../ViewModel/PortfolioItemViewModel";
import { FullScreenModalView } from "../../../../Common/FullScreenModal/FullScreenModalView";

interface props {
  item: Portfolio;
}

const CAROUSEL_OPTIONS = { dragFree: false, loop: true };

export const PortfolioItemView: React.FC<props> = (props) => {
  const { item } = props;

  const portfolioItemVM = PortfolioItemViewModel({
    carouselOptions: CAROUSEL_OPTIONS,
  });

  const {
    ScrollSnaps,
    updateScrollSnaps,
    emblaCarouselType,
    OpenFullScreenImage,
    SelectedCarouselIndex,
    updateOpenFullScreenImage,
    updateSelectedCarouselIndex,
  } = portfolioItemVM;

  // Embla Carousel Methods
  const [_, emblaApi] = emblaCarouselType;

  const handleThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      updateSelectedCarouselIndex(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    updateScrollSnaps(emblaApi?.scrollSnapList() ?? []);
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    updateSelectedCarouselIndex(emblaApi?.selectedScrollSnap() ?? 0);
  }, []);
  // End of Embla Carousel Methods

  return (
    <>
      {/* Full Screen Modal */}
      {OpenFullScreenImage != "" && (
        <FullScreenModalView onCloseModal={() => updateOpenFullScreenImage("")}>
          <Box className="">
            <Image
              src={OpenFullScreenImage}
              className="w-xl md:w-3xl lg:w-4xl"
            />
          </Box>
        </FullScreenModalView>
      )}

      <Box className="mt-2 mb-8">
        {/* Carousel Component */}
        <Box className="mt-4">
          <CarouselView
            images={item.image ?? []}
            emblaCarouselType={emblaCarouselType}
            onClickExpandImage={(image) => updateOpenFullScreenImage(image)}
            onUpdateScrollSnaps={(emblaApi: EmblaCarouselType) =>
              onInit(emblaApi)
            }
            onUpdateSelectedCarouselIndex={(emblaApi: EmblaCarouselType) =>
              onSelect(emblaApi)
            }
          />
        </Box>

        {/* Carousel Thumbnails */}
        <Box className="mt-4 flex flex-row justify-center">
          {ScrollSnaps.length > 0 &&
            ScrollSnaps.map((_, index) => {
              const image = item.image?.[index];

              return (
                <CarouselThumb
                  image={image}
                  key={index}
                  selected={index === SelectedCarouselIndex}
                  onClickExpand={() => {
                    updateOpenFullScreenImage(image?.image ?? "");
                  }}
                  onClickUpdateSelected={() => {
                    handleThumbClick(index);
                  }}
                />
              );
            })}
        </Box>

        {/* External Link Buttons */}
        <Box className="mt-4 flex w-full flex-row gap-x-1">
          {item.externalLink?.map((item, index) => (
            <Box
              key={index}
              border="1px"
              borderColor="#AF8E25"
              onClick={() => window.open(item.url ?? "", "_blank")}
              className="flex cursor-pointer items-center justify-center rounded-md p-1"
            >
              <Image className="w-7" src={item.icon} />
            </Box>
          ))}
        </Box>

        {/* Details */}
        <Box className="mt-4">
          <Text className="font-sfpro text-white">
            {parse(item.description ?? "")}
          </Text>
        </Box>
      </Box>
    </>
  );
};
