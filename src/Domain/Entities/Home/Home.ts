export interface Home {
  image?: string;
  location?: string;
  headline?: string;
  greetingMessage?: string;
  countSection?: DataSection[];
  personalSection?: DataSection[];
}

export interface DataSection {
  icon?: string;
  value?: string;
  title?: string;
  action?: string;
  position?: number;
}
