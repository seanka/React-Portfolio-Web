import { useState } from "react";

import { Portfolio } from "../../../Domain/Entities/Portfolio";

import PortfolioDataSource from "../../../Data/Remotes/PortolioDataSource";

import { ImageProperty } from "../../../Common/Interface/ImageProperty";

export function PortfolioViewModel() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>();

  const [isShowDecoration, setIsShowDecoration] = useState(false);

  const [imageModal, setImageModal] = useState<ImageProperty>({ alt: "", image: "" });

  //* Get Variable Methods
  function getIsLoading() {
    return isLoading;
  }

  function getPortfolioList() {
    return portfolioList;
  }

  function getIsShowDecoration() {
    return isShowDecoration;
  }

  function getImageModal() {
    return imageModal;
  }

  //* Logic Methods
  function onCloseImageModal() {
    setImageModal({ alt: "", image: "" });
  }

  function onOpenImageModal(image: ImageProperty) {
    setImageModal(image);
  }

  function onTapNextImageModal(index: number, images: ImageProperty[]) {
    if (index === images.length - 1) return;

    setImageModal(images[index + 1]);
  }

  function onTapPrevImageModal(index: number, images: ImageProperty[]) {
    if (index === 0) return;

    setImageModal(images[index - 1]);
  }

  // * API Call Methods
  async function requestPortfolioList() {
    setIsShowDecoration(false);
    setIsLoading(true);

    const ds = new PortfolioDataSource();
    const response = await ds.requestPortfolio();

    setPortfolioList(response);
    setIsLoading(false);

    setTimeout(() => {
      setIsShowDecoration(true);
    }, 500);
  }

  return {
    getIsLoading,
    getPortfolioList,
    getIsShowDecoration,
    getImageModal,

    requestPortfolioList,

    onCloseImageModal,
    onOpenImageModal,
    onTapNextImageModal,
    onTapPrevImageModal,
  };
}
