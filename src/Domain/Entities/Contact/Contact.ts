export interface Contact {
  socialMedia?: ContactData[];
  contactInformation?: ContactData[];
}

export interface ContactData {
  icon?: string;
  link?: string;
  value?: string;
  platform?: string;
}
