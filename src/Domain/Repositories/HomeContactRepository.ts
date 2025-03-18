import { BaseResponse } from "../Entities/Core/BaseResponse";

import { HomeContactSectionEnum } from "../../Common/Enum/HomeContact/HomeContactSectionEnum";

export interface HomeContactRepository {
  requestHomeContactData(
    document: HomeContactSectionEnum,
  ): Promise<BaseResponse<any>>;
}
