import { ImageProperty } from "../../../Common/Interface/ImageProperty";

export interface TechSkills {
  categories?: TechSkillCategoryItem[];
  category_data?: Record<string, TechSkillCategoryDataItem>;
}

export interface TechSkillCategoryItem {
  id?: string;
  title?: string;
  position?: number;
  description?: string;
}

interface TechSkillCategoryDataItem {
  icons?: ImageProperty[];
}
