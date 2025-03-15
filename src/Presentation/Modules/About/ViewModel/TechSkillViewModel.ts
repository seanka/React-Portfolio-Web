import { useState } from "react";

const TechSkillViewModel = () => {
  const [IsCategoryExpanded, setIsCategoryExpanded] = useState<
    { id: string; state: boolean }[]
  >([]);

  function handleCategoryExpand(props: string) {
    setIsCategoryExpanded((state) =>
      state.map((item) =>
        item.id === props ? { ...item, state: !item.state } : item,
      ),
    );
  }

  return {
    IsCategoryExpanded,
    setIsCategoryExpanded,
    handleCategoryExpand,
  };
};

export default TechSkillViewModel;
