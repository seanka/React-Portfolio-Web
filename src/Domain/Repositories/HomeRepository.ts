import { BaseResponse } from "../Entities/Core/BaseResponse";
import { Home } from "../Entities/Home/Home";

export interface HomeRepository {
  requestHomeV2(): Promise<BaseResponse<Home>[]>;
}
