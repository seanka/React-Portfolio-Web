import { BaseRemote } from "./Base/BaseRemote";

import { Collection } from "../../Common/Enum/Collection";

import { Home } from "../../Domain/Entities/Home/Home";
import { BaseResponse } from "../../Domain/Entities/Core/BaseResponse";

import { HomeContactRepository } from "../../Domain/Repositories/HomeContactRepository";

import { HomeContactSectionEnum } from "../../Common/Enum/HomeContact/HomeContactSectionEnum";

export default class HomeContactDataSource implements HomeContactRepository {
  async requestHomeContactData(
    document: HomeContactSectionEnum,
  ): Promise<BaseResponse<any>> {
    const baseRemote = BaseRemote();

    const data = await baseRemote.requestCollection({
      col: `${Collection.home_contact}-${Collection.data}`,
    });

    let response: BaseResponse<any> = { id: document, data: {} };
    const homeContactData = data.docs.find((doc) => doc.id === document);

    if (document === HomeContactSectionEnum.HOME) {
      response.data = homeContactData?.data() as Home;
    } else if (document === HomeContactSectionEnum.CONTACT) {
      response.data = homeContactData?.data();
    }

    return response;
  }
}
