import { useState } from "react";

const RootViewModel = () => {
  const [IsExtendedSideBarState, setIsExtendedSideBarState] =
    useState<boolean>(true);

  const getSideBarState = () => IsExtendedSideBarState;

  const updateSideBarState = () =>
    setIsExtendedSideBarState(!IsExtendedSideBarState);

  return {
    getSideBarState,

    updateSideBarState,
  };
};

export default RootViewModel;
