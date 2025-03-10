import { useState } from "react";

import Autoplay from "embla-carousel-autoplay";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

interface props {
  carouselOptions: EmblaOptionsType;
}

const PortfolioItemViewModel = (props: props) => {
  const { carouselOptions } = props;

  const [ScrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [OpenFullScreenImage, setOpenFullScreenImage] = useState("");
  const [SelectedCarouselIndex, setSelectedCarouselIndex] = useState(0);

  const emblaCarouselType = useEmblaCarousel(carouselOptions, [
    Autoplay({ playOnInit: true, stopOnInteraction: false }),
  ]);

  function updateSelectedCarouselIndex(index: number) {
    setSelectedCarouselIndex(index);
  }

  function updateScrollSnaps(props: number[]) {
    setScrollSnaps(props);
  }

  function updateOpenFullScreenImage(props: string) {
    console.log(props);
    setOpenFullScreenImage(props);
  }

  return {
    ScrollSnaps,
    updateScrollSnaps,
    emblaCarouselType,
    OpenFullScreenImage,
    SelectedCarouselIndex,
    updateOpenFullScreenImage,
    updateSelectedCarouselIndex,
  };
};

export default PortfolioItemViewModel;
