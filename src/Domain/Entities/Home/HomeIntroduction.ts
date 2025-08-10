export interface HomeIntroduction {
  greeting?: string;
  headline?: string;
  coverImage?: string;
  categoryPublished?: boolean;
  interest?: IntroductionData[];
  demographic?: IntroductionData[];
  listContact?: IntroductionContact[];
  contact?: Record<string, IntroductionContact>[];
}

export interface IntroductionData {
  icon?: string;
  title?: string;
  value?: string;
  position?: number;
}

interface IntroductionContact {
  url?: string;
  image?: string;
  position?: number;
  published?: boolean;
}
