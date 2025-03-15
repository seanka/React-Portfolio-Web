import { ImageProperty } from "../../../Common/Interface/ImageProperty";

export interface Portfolio {
  title?: string;
  created?: string;
  briefDesc?: string;
  description?: string;
  isPublished?: boolean;
  images?: ImageProperty[];
}
