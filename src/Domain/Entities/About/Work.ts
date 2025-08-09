export interface Work {
  title?: string;
  position?: number;
  duration?: string;
  location?: string;
  currentWork?: boolean;
  detail?: WorkDetail[];
}

export interface WorkDetail {
  duration?: string;
  division?: string;
  employment?: string;
  description?: string;
}
