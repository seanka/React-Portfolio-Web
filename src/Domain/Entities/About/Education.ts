import { ImageProperty } from "../../../Common/Interface/ImageProperty";

export interface Education {
  school?: EducationSchool[];
  certifications?: EducationCertification[];
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

export interface EducationSchool {
  grade?: string;
  field?: string;
  degree?: string;
  duration?: string;
  position?: number;
  image?: ImageProperty;
  organization?: string;
  descriptions?: string[];
}
