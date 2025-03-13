import { Dimension } from "./Dimension";

export interface ImageProperty {
  image: string;
  alt: string;
  hover?: string;
  isLarger?: boolean;
  dimension?: Dimension;
}
