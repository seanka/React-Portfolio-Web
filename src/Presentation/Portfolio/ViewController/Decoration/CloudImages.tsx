import React, { useMemo } from "react";

import { Images } from "../../../../Common/Enum/Assets/Images";
import { Dimension } from "../../../../Common/Interface/Dimension";
import { AspectRatio } from "../../../../Common/Interface/AspectRatio";
import { ImageProperty } from "../../../../Common/Interface/ImageProperty";

import ImageRandomPosition from "../../../Common/ImageRandomPosition/ImageRandomPosition";

import { PortfolioViewModel } from "../../ViewModel/PortfolioViewModel";

interface props {
  count: number;
  height: number;
  parentDimension: Dimension;
  portfolioVM: ReturnType<typeof PortfolioViewModel>;
}

const CloudImages: React.FC<props> = (props) => {
  const { count, height, parentDimension, portfolioVM } = props;

  var localCloudCoordinates: ImageProperty[] = [];
  var generatedImageCoordinates: ImageProperty[] = [];
  var shouldGenerateImageCoordinates = false;

  useMemo(() => {
    localCloudCoordinates = portfolioVM.getCloudLocalCoordinates();

    shouldGenerateImageCoordinates = localCloudCoordinates.length <= 0 && localCloudCoordinates.length !== count;
  }, [portfolioVM]);

  function handleAppendGeneratedImage(index: number, coordinate: Dimension, image: string) {
    const newData: ImageProperty = { image: image, alt: image, dimension: { bottom: coordinate.bottom, right: coordinate.right } };
    generatedImageCoordinates.push(newData);

    if (index === count - 1) portfolioVM.saveCloudGeneratedCoordinates(generatedImageCoordinates);
  }

  return Array.from({ length: count }).map((_, i) => {
    var image: ImageProperty;

    if (shouldGenerateImageCoordinates) {
      image = { image: Images.ic_cloud, alt: "bird" };
    } else {
      image = localCloudCoordinates[i];
    }

    return (
      <ImageRandomPosition
        key={i}
        src={image.image}
        multiplier={(i + 0.01) * 1.5}
        minX={10}
        maxX={parentDimension.width! - 10}
        minY={height + i * 100}
        maxY={parentDimension.height}
        imageWidth={PIC_WIDTH}
        imageHeight={PIC_HEIGHT}
        imageCoordinates={localCloudCoordinates[i]}
        isGenerateImageCoordinates={shouldGenerateImageCoordinates}
        saveGeneratedImageCoordinate={(value: Dimension) => handleAppendGeneratedImage(i, value, image.image)}
      />
    );
  });
};

export default CloudImages;

const PIC_ASPECT_RATIO: AspectRatio = {
  small: { width: 100, height: 50 },
  med: { width: 150, height: 75 },
  big: { width: 200, height: 100 },
};

const PIC_HEIGHT = [PIC_ASPECT_RATIO.small.height, null, PIC_ASPECT_RATIO.med.height, null, PIC_ASPECT_RATIO.big.height];

const PIC_WIDTH = [PIC_ASPECT_RATIO.small.width, null, PIC_ASPECT_RATIO.med.width, null, PIC_ASPECT_RATIO.big.width];
