export interface WorkExperience {
  position?: number;
  duration?: string;
  location?: string;
  organization?: string;
  detail?: WorkExperienceDetail[];
}

interface WorkExperienceDetail {
  duration?: string;
  division?: string;
  employment?: string;
  description?: string;
}
