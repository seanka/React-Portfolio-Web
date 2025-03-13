import { ImageProperty } from "../../../Common/Interface/ImageProperty";

export interface TechSkills {
  categories?: TechSkillCategoryItem[];
  category_data?: Record<string, TechSkillCategoryDataItem>;
}

interface TechSkillCategoryItem {
  id?: string;
  title?: string;
  position?: number;
}

interface TechSkillCategoryDataItem {
  icons?: ImageProperty[];
}
