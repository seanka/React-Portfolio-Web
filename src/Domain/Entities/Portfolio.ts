import { ImageProperty } from "../../Common/Interface/ImageProperty";

export interface Portfolio {
  title?: string;
  field?: string;
  briefDesc?: string;
  description?: string;
  images?: ImageProperty[];
  framework?: ImageProperty[];
}
