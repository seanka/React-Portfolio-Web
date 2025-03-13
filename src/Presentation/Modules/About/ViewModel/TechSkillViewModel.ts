import { useState } from "react";

const TechSkillViewModel = () => {
  const [SelectedTab, SetSelectedTab] = useState<number>(0);

  function handleSelectedTab(props: number) {
    SetSelectedTab(props);
  }

  return {
    SelectedTab,
    handleSelectedTab,
  };
};

export default TechSkillViewModel;
