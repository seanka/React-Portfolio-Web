import { useState } from "react";

const EducationViewModel = () => {
  const [SelectedTab, SetSelectedTab] = useState<string>("school");

  function handleSelectedTab(props: string) {
    SetSelectedTab(props);
  }

  return {
    SelectedTab,
    handleSelectedTab,
  };
};

export default EducationViewModel;
