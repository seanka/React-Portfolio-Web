export interface Home {
  greeting?: string;
  headline?: string;
  coverImage?: string;
  interest?: HomeData[];
  demographic?: HomeData[];
  contact?: Record<string, HomeContact>[];
  listContact?: HomeContact[];
  categoryPublished?: boolean;
}

export interface HomeData {
  icon?: string;
  title?: string;
  value?: string;
  position?: number;
}

interface HomeContact {
  url?: string;
  image?: string;
  position?: number;
  published?: boolean;
}

export interface DataSection {
  icon?: string;
  value?: string;
  title?: string;
  action?: string;
  position?: number;
}
