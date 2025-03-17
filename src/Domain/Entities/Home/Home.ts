export interface Home {
  location?: string;
  headline?: string;
  greetingMessage?: string;
  countSection?: DataSection[];
  personalSection?: DataSection[];
}

export interface DataSection {
  value?: string;
  title?: string;
  icon?: string;
}
