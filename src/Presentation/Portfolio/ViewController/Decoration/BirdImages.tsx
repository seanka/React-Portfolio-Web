import React, { useMemo } from "react";

import { Images } from "../../../../Common/Enum/Assets/Images";
import { Dimension } from "../../../../Common/Interface/Dimension";
import { BoxAspectRatio } from "../../../../Common/Interface/AspectRatio";
import { ImageProperty } from "../../../../Common/Interface/ImageProperty";

import ImageRandomPosition from "../../../Common/ImageRandomPosition/ImageRandomPosition";

import { PortfolioViewModel } from "../../ViewModel/PortfolioViewModel";

interface props {
  count: number;
  height: number;
  parentDimension: Dimension;
  portfolioVM: ReturnType<typeof PortfolioViewModel>;
}

const BirdImages: React.FC<props> = (props) => {
  const { count, height, parentDimension, portfolioVM } = props;

  var localBirdCoordinates: ImageProperty[] = [];
  var generatedImageCoordinates: ImageProperty[] = [];
  var shouldGenerateImageCoordinates = false;

  useMemo(() => {
    localBirdCoordinates = portfolioVM.getBirdLocalCoordinates();

    shouldGenerateImageCoordinates = localBirdCoordinates.length <= 0 && localBirdCoordinates.length !== count;
  }, [portfolioVM]);

  function handleAppendGeneratedImage(index: number, coordinate: Dimension, image: string) {
    const newData: ImageProperty = { image: image, alt: image, dimension: { bottom: coordinate.bottom, right: coordinate.right } };
    generatedImageCoordinates.push(newData);

    if (index === count - 1) portfolioVM.saveBirdGeneratedCoordinates(generatedImageCoordinates);
  }

  return Array.from({ length: count }).map((_, i) => {
    var image: ImageProperty;

    if (shouldGenerateImageCoordinates) {
      image = { image: getRandomBirdImage(), alt: "bird" };
    } else {
      image = localBirdCoordinates[i];
    }

    return (
      <ImageRandomPosition
        key={i}
        src={image.image}
        multiplier={(i + 0.5) / 1.75}
        minX={10}
        maxX={parentDimension.width! - 10}
        minY={height + i * 100}
        maxY={parentDimension.height}
        imageSize={PIC_SIZE}
        imageCoordinates={localBirdCoordinates[i]}
        isGenerateImageCoordinates={shouldGenerateImageCoordinates}
        saveGeneratedImageCoordinate={(value: Dimension) => handleAppendGeneratedImage(i, value, image.image)}
      />
    );
  });
};

export default BirdImages;

function getRandomBirdImage(): string {
  const random = Math.floor(Math.random() * 4) + 1;
  const key = `ic_bird_${random}` as keyof typeof Images;
  const image = Images[key];

  return image;
}

const PIC_ASPECT_RATIO: BoxAspectRatio = {
  small: { size: 38 },
  med: { size: 58 },
  big: { size: 78 },
};

const PIC_SIZE = [PIC_ASPECT_RATIO.small.size, null, PIC_ASPECT_RATIO.med.size, null, PIC_ASPECT_RATIO.big.size];
