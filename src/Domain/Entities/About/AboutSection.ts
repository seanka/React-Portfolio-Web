import { AboutSectionsEnum } from "../../../Common/Enum/About/AboutSectionsEnum";

export interface AboutSection {
  id?: AboutSectionsEnum;
  title?: string;
  position?: number;
  subtitle?: string;
}
