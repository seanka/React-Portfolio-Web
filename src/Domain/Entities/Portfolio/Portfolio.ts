import { ImageProperty } from "../../../Common/Interface/ImageProperty";

export interface PortfolioV2 {
  id?: string;
  title?: string;
  position?: number;
  expanded?: boolean;
  data?: PortfolioBriefData[];
}

interface PortfolioBriefData {
  title?: string;
  created?: string;
  published?: boolean;
}

export interface Portfolio {
  description?: string;
  image?: ImageProperty[];
  externalLink?: ExternalLink[];
}

interface ExternalLink {
  url?: string;
  icon?: string;
  title?: string;
}
