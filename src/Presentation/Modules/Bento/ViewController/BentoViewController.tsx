import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

import BentoViewModel from "../ViewModel/BentoViewModel";
import { SpinnerLoader } from "../../../Common/SpinnerLoader/SpinnerLoader";

import { HeroCard } from "./Cards/HeroCard";
import { IntroTaglineCard } from "./Cards/IntroTaglineCard";
import { CurrentStatusCard } from "./Cards/CurrentStatusCard";
import { SocialsCard } from "./Cards/SocialsCard";
import { TechSkillsCard } from "./Cards/TechSkillsCard";
import { WorkExpBentoCard } from "./Cards/WorkExpBentoCard";
import { EducationBentoCard } from "./Cards/EducationBentoCard";
import { ProjectsCard } from "./Cards/ProjectsCard";
import { ProjectDetailModal } from "./Cards/ProjectDetailModal";

export const BentoViewController: React.FC = () => {
  const vm = BentoViewModel();
  const {
    IsLoading,
    Introduction,
    Skills,
    WorkData,
    EducationData,
    Portfolio,
    ActiveCategory,
    SelectedItem,
    currentWork,
    filteredPortfolioItems,
    requestAll,
    updateActiveCategory,
    openSelectedItem,
    closeSelectedItem,
  } = vm;

  useEffect(() => {
    requestAll();
  }, []);

  if (IsLoading) {
    return (
      <Box className="flex h-screen w-screen items-center justify-center bg-[#1E1E1E]">
        <SpinnerLoader />
      </Box>
    );
  }

  return (
    <Box className="min-h-screen w-full bg-[#1E1E1E] px-4 py-6 md:px-18 md:py-20">
      {/* Bento Grid */}
      <Box className="grid grid-cols-12 gap-10">

        {/*
          Row 1–2 (auto-row height)s
          Mobile:  each card full-width, stacked
          Desktop: Hero(3,rows1-2) | Tagline(6,row1) | Socials(3,rows1-2)
                                   | Status(6,row2)
        */}

        {Introduction && (
          <HeroCard data={Introduction} />
        )}

        {Introduction && (
          <IntroTaglineCard data={Introduction} />
        )}

        {Introduction && (
          <SocialsCard data={Introduction} />
        )}

        {currentWork && (
          <CurrentStatusCard currentWork={currentWork} />
        )}

        {/* Row 3: Tech Skills – full 12 cols */}
        {Skills.length > 0 && (
          <TechSkillsCard data={Skills} />
        )}

        {/* Row 4: Work Experience (7) + Education (5) */}
        {WorkData.length > 0 && (
          <WorkExpBentoCard data={WorkData} />
        )}

        {EducationData.length > 0 && (
          <EducationBentoCard data={EducationData} />
        )}

        {/* Row 5: Projects – full 12 cols */}
        {Portfolio.length > 0 && (
          <ProjectsCard
            categories={Portfolio}
            items={filteredPortfolioItems}
            activeCategory={ActiveCategory}
            onSelectCategory={updateActiveCategory}
            onSelectItem={openSelectedItem}
          />
        )}
      </Box>

      {/* Project Detail Modal */}
      <ProjectDetailModal item={SelectedItem} onClose={closeSelectedItem} />
    </Box>
  );
};
