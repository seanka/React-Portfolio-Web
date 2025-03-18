import { useState } from "react";

import HomeContactDataSource from "../../../../Data/Remotes/HomeContactDataSource";

import { Contact } from "../../../../Domain/Entities/Contact/Contact";
import { BaseResponse } from "../../../../Domain/Entities/Core/BaseResponse";
import { HomeContactSectionEnum } from "../../../../Common/Enum/HomeContact/HomeContactSectionEnum";

const ContactViewModel = () => {
  const ds = new HomeContactDataSource();

  const [ContactData, setContactData] = useState<BaseResponse<Contact>>();

  const [IsLoading, setIsLoading] = useState<boolean>(false);

  async function requestContactData() {
    setIsLoading(true);
    const response = await ds.requestHomeContactData(
      HomeContactSectionEnum.CONTACT,
    );

    setContactData(response);
    setIsLoading(false);
  }

  return { IsLoading, ContactData, requestContactData };
};

export default ContactViewModel;
