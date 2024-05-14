import { ImageProperty } from "./Image";

export interface Portfolio {
  title?: string;
  field?: string;
  description?: string;
  images?: ImageProperty[];
  framework?: ImageProperty[];
}
