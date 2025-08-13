import { useState } from "react";

import { Home } from "../../../../Domain/Entities/Home/Home";
import { HomeRunning } from "../../../../Domain/Entities/Home/HomeRunning";
import { HomeIntroduction } from "../../../../Domain/Entities/Home/HomeIntroduction";

import HomeDataSource from "../../../../Data/Remotes/HomeDataSource";
import ArrayExtension from "../../../../Common/Core/Utils/ArrayExtension";

import { HomeEnum } from "../../../../Common/Enum/Home/HomeEnum";

const HomeViewModel = () => {
  const ds = new HomeDataSource();

  const [Home, setHome] = useState<Home>({});

  const [IsLoading, setIsLoading] = useState<boolean>(false);

  async function requestHomeData() {
    setIsLoading(true);
    const home = await ds.requestHomeV2();

    const sortedHome: Home = {};
    home.forEach((section) => {
      switch (section.id) {
        case HomeEnum.INTRODUCTION:
          const intro = section.data as HomeIntroduction;

          sortedHome.introduction = {
            greeting: intro.greeting,
            headline: intro.headline,
            coverImage: intro.coverImage,
            categoryPublished: intro.categoryPublished,
            interest: ArrayExtension.SortArrayByPosition(intro.interest ?? []),
            demographic: ArrayExtension.SortArrayByPosition(
              intro.demographic ?? [],
            ),
            listContact: ArrayExtension.SortArrayByPosition(
              Object.values(intro.contact ?? []),
            ),
          };
          break;

        case HomeEnum.RUNNING:
          const running = section.data as HomeRunning;

          sortedHome.running = {
            position: running.position,
            categoryPublished: running.categoryPublished,
            listData: Object.values(running.data!).map((run) => ({
              peak: run.peak,
              title: run.title,
              mileage: run.mileage,
              race: ArrayExtension.SortArrayByPosition(run.race ?? []),
            })),
            accumulation: running.accumulation,
          };
          break;

        default:
          break;
      }
    });

    setHome(sortedHome);
    setIsLoading(false);
  }

  return { Home, IsLoading, requestHomeData };
};

export default HomeViewModel;
