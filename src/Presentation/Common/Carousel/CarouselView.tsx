import React, { useCallback, useEffect, useRef } from "react";

import { Box, Image } from "@chakra-ui/react";

import { UseEmblaCarouselType } from "embla-carousel-react";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";

import Images from "../../../Common/Core/Images";

import "./CarouselCSS.css";
import { ImageProperty } from "../../../Common/Interface/ImageProperty";

type PropType = {
  images: ImageProperty[];
  onClickExpandImage: (image: string) => void;
  onUpdateScrollSnaps: (emblaApi: EmblaCarouselType) => void;
  onUpdateSelectedCarouselIndex: (emblaApi: EmblaCarouselType) => void;
  emblaCarouselType: UseEmblaCarouselType;
};

const TWEEN_FACTOR_BASE = 0.2;

export const CarouselView: React.FC<PropType> = (props) => {
  const {
    images,
    onClickExpandImage,
    emblaCarouselType,
    onUpdateScrollSnaps,
    onUpdateSelectedCarouselIndex,
  } = props;

  const [emblaRef, emblaApi] = emblaCarouselType;

  // Parallax Methods
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    [],
  );

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);
  // End of Parallax Methods

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    onUpdateScrollSnaps(emblaApi);
    onUpdateSelectedCarouselIndex(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax)
      .on("reInit", onUpdateScrollSnaps)
      .on("reInit", onUpdateSelectedCarouselIndex)
      .on("select", onUpdateSelectedCarouselIndex);
  }, [emblaApi, tweenParallax]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((index, number) => (
            <Box className="embla__slide" key={number}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <img
                    alt={index.alt}
                    src={index.image}
                    className="embla__slide__img embla__parallax__img"
                  />
                </div>
              </div>

              {/* Hover Overlay */}
              <Box
                className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-3xl bg-[#00000080] opacity-0 hover:cursor-pointer"
                _hover={{ opacity: 1 }}
                onClick={() => onClickExpandImage(index.image)}
                transition="opacity 0.3s ease-in-out"
              >
                <Image
                  src={Images.ic_maximize_white}
                  className="w-8 items-center justify-center"
                />
              </Box>
            </Box>
          ))}
        </div>
      </div>
    </section>
  );
};
