import { useState } from "react";

import HomeContactDataSource from "../../../../Data/Remotes/HomeContactDataSource";

import { Home } from "../../../../Domain/Entities/Home/Home";
import { BaseResponse } from "../../../../Domain/Entities/Core/BaseResponse";
import { HomeContactSectionEnum } from "../../../../Common/Enum/HomeContact/HomeContactSectionEnum";

const HomeViewModel = () => {
  const ds = new HomeContactDataSource();

  const [HomeData, setHomeData] = useState<BaseResponse<Home>>({});

  const [IsLoading, setIsLoading] = useState<boolean>(false);

  async function requestHomeData() {
    setIsLoading(true);
    const response = await ds.requestHomeContactData(
      HomeContactSectionEnum.HOME,
    );

    setHomeData(response);
    setIsLoading(false);
  }

  return { HomeData, IsLoading, requestHomeData };
};

export default HomeViewModel;
