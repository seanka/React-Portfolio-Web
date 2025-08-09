import { ImageProperty } from "../../../Common/Interface/ImageProperty";

export interface Education {
  title?: string;
  listData?: EducationData[];
  data?: Record<string, EducationData>;
}

export interface EducationData {
  grade?: string;
  field?: string;
  degree?: string;
  duration?: string;
  position?: number;
  published?: boolean;
  organization?: string;
  description?: string[];
  image?: ImageProperty;
}

export interface EducationCertification {
  position?: number;
  organization?: string;
  image?: ImageProperty;
  data?: CertificationData[];
}

interface CertificationData {
  title?: string;
  issued?: string;
  credential?: string;
}
