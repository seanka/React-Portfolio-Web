import { ImageProperty } from "../../Common/Interface/ImageProperty";

export interface Portfolio {
  title?: string;
  field?: string;
  description?: string;
  images?: ImageProperty[];
  framework?: ImageProperty[];
}
