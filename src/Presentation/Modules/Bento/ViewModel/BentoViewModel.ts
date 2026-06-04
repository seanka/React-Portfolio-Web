import { useState } from "react";

import HomeDataSource from "../../../../Data/Remotes/HomeDataSource";
import AboutDataSource from "../../../../Data/Remotes/AboutDataSource";
import PortfolioDataSource from "../../../../Data/Remotes/PortolioDataSource";

import { HomeIntroduction } from "../../../../Domain/Entities/Home/HomeIntroduction";
import { Work } from "../../../../Domain/Entities/About/Work";
import { Skill } from "../../../../Domain/Entities/About/Skill";
import { Education } from "../../../../Domain/Entities/About/Education";
import { Portfolio, PortfolioV2 } from "../../../../Domain/Entities/Portfolio/Portfolio";
import { BaseResponse } from "../../../../Domain/Entities/Core/BaseResponse";

import ArrayExtension from "../../../../Common/Core/Utils/ArrayExtension";

export interface PortfolioItem {
  title: string;
  categoryId: string;
  categoryTitle: string;
  created?: string;
  data?: Portfolio;
}

const BentoViewModel = () => {
  const homeDS = new HomeDataSource();
  const aboutDS = new AboutDataSource();
  const portfolioDS = new PortfolioDataSource();

  const [IsLoading, setIsLoading] = useState(true);

  // Home
  const [Introduction, setIntroduction] = useState<HomeIntroduction>();

  // About
  const [Skills, setSkills] = useState<BaseResponse<Skill>[]>([]);
  const [WorkData, setWorkData] = useState<BaseResponse<Work>[]>([]);
  const [EducationData, setEducationData] = useState<BaseResponse<Education>[]>([]);

  // Portfolio
  const [Portfolio, setPortfolio] = useState<BaseResponse<PortfolioV2>[]>([]);
  const [PortfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [ActiveCategory, setActiveCategory] = useState<string>("All");
  const [SelectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  async function requestAll() {
    setIsLoading(true);

    await Promise.all([
      fetchHome(),
      fetchSkills(),
      fetchWork(),
      fetchEducation(),
      fetchPortfolio(),
    ]);

    setIsLoading(false);
  }

  async function fetchHome() {
    const response = await homeDS.requestHomeV2();
    const introSection = response.find((s) => s.id === "INTRODUCTION");
    if (!introSection) return;

    const intro = introSection.data as HomeIntroduction;
    setIntroduction({
      greeting: intro.greeting,
      headline: intro.headline,
      summary: intro.summary,
      coverImage: intro.coverImage,
      categoryPublished: intro.categoryPublished,
      interest: ArrayExtension.SortArrayByPosition(intro.interest ?? []),
      demographic: ArrayExtension.SortArrayByPosition(intro.demographic ?? []),
      listContact: ArrayExtension.SortArrayByPosition(
        Object.values(intro.contact ?? {}),
      ),
    });
  }

  async function fetchSkills() {
    const tech = await aboutDS.requestAboutV2Skill();
    const sorted = ArrayExtension.SortArrayByDataPosition(
      tech,
      "asc",
    ) as BaseResponse<Skill>[];
    sorted.forEach((s) => {
      if (s.data) s.data.expanded = true;
    });
    setSkills(sorted);
  }

  async function fetchWork() {
    const work = await aboutDS.requestAboutV2Work();
    let sorted = ArrayExtension.SortArrayByDataPosition(
      work,
      "desc",
    ) as BaseResponse<Work>[];
    sorted = sorted.map((w) => ({
      id: w.id,
      data: {
        title: w.data?.title,
        location: w.data?.location,
        position: w.data?.position,
        duration: w.data?.duration,
        currentWork: w.data?.currentWork,
        detail: w.data?.detail ? [...w.data.detail].reverse() : [],
      },
    }));
    setWorkData(sorted);
  }

  async function fetchEducation() {
    const edu = await aboutDS.requestAboutV2Edu();
    const sorted = edu.map((e) => ({
      id: e.id,
      data: {
        title: e.data?.title,
        listData: ArrayExtension.SortArrayByPosition(
          Object.values(e.data?.data ?? {}),
        ),
      },
    })) as BaseResponse<Education>[];
    setEducationData(sorted);
  }

  async function fetchPortfolio() {
    const categories = await portfolioDS.requestPortfolioV2();

    const sorted = categories.map((cat) => ({
      id: cat.id,
      data: {
        expanded: true,
        id: cat.data?.id,
        title: cat.data?.title,
        position: cat.data?.position,
        data: ArrayExtension.sortByCreatedDate(cat.data?.data ?? []),
      },
    }));
    setPortfolio(sorted);

    // Pre-fetch full portfolio data for all categories in parallel
    const allCategoryData = await Promise.all(
      sorted.map(async (cat) => {
        if (!cat.id) return { catId: "", catTitle: "", items: [] as BaseResponse<Portfolio>[] };
        const items = await portfolioDS.requestPortfolioV2Data(cat.id);
        return { catId: cat.id, catTitle: cat.data?.title ?? "", items };
      }),
    );

    // Build flat list of all items with full portfolio data
    const flatItems: PortfolioItem[] = [];
    sorted.forEach((cat) => {
      const catFullData = allCategoryData.find((d) => d.catId === cat.id);
      const briefItems = cat.data?.data ?? [];
      briefItems.forEach((brief) => {
        const fullData = catFullData?.items.find(
          (item) => item.id === brief.title,
        );
        flatItems.push({
          title: brief.title ?? "",
          categoryId: cat.id ?? "",
          categoryTitle: cat.data?.title ?? "",
          created: brief.created,
          data: fullData?.data,
        });
      });
    });

    setPortfolioItems(flatItems);
  }

  function updateActiveCategory(category: string) {
    setActiveCategory(category);
  }

  function openSelectedItem(item: PortfolioItem) {
    setSelectedItem(item);
  }

  function closeSelectedItem() {
    setSelectedItem(null);
  }

  // Derived: items filtered by active category tab
  const filteredPortfolioItems =
    ActiveCategory === "All"
      ? PortfolioItems
      : PortfolioItems.filter((item) => item.categoryId === ActiveCategory);

  // Derived: current employer (for status card)
  const currentWork = WorkData.find((w) => w.data?.currentWork);
  const currentRole = currentWork?.data?.detail?.[currentWork.data.detail.length - 1];

  return {
    IsLoading,
    Introduction,
    Skills,
    WorkData,
    EducationData,
    Portfolio,
    PortfolioItems,
    ActiveCategory,
    SelectedItem,
    currentWork,
    currentRole,
    filteredPortfolioItems,
    requestAll,
    updateActiveCategory,
    openSelectedItem,
    closeSelectedItem,
  };
};

export default BentoViewModel;
