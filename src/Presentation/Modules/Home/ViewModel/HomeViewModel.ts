import { useState } from "react";

import { Home } from "../../../../Domain/Entities/Home/Home";
import { BaseResponse } from "../../../../Domain/Entities/Core/BaseResponse";

import HomeDataSource from "../../../../Data/Remotes/HomeDataSource";
import ArrayExtension from "../../../../Common/Core/Utils/ArrayExtension";

const HomeViewModel = () => {
  const ds = new HomeDataSource();

  const [Home, setHome] = useState<BaseResponse<Home>[]>([]);

  const [IsLoading, setIsLoading] = useState<boolean>(false);

  async function requestHomeData() {
    setIsLoading(true);
    // const home = await ds.requestHomeV2();

    const home = [
      {
        id: "INTRODUCTION",
        data: {
          coverImage:
            "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Misc%2FIMG_5321-2.png?alt=media&token=e43241c9-1c77-4e6a-b0c6-e1635f43b5f2",
          demographic: [
            {
              title: "Location",
              position: 1,
              icon: "📍",
              value: "Jakarta, Indonesia",
            },
            {
              title: "Nationality",
              value: "Indonesian",
              position: 2,
              icon: "🌏",
            },
          ],
          greeting: "👋 It's Sean Anderson",
          headline: "Data Enthusiast - iOS Developer",
          categoryPublished: true,
          interest: [
            {
              icon: "👟",
              value: "Running",
              title: "Hobby",
              position: 1,
            },
            {
              value: "Fried Rice",
              icon: "🍴",
              position: 2,
              title: "Favorite Food",
            },
          ],
          contact: {
            linkedin: {
              published: true,
              url: "https://www.linkedin.com/in/seankristian/",
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_linkedin.png?alt=media&token=1d78b1b6-e969-4bdf-8eeb-effaa24d5457",
              position: 1,
            },
            whatsapp: {
              url: "http://wa.me/+6282117320004",
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_whatsapp.png?alt=media&token=8fadee08-1fb8-41e0-9f3d-694bdb4c9b1b",
              published: true,
              position: 4,
            },
            instagram: {
              position: 3,
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_instagram.png?alt=media&token=ecf46739-de5d-4628-a39c-93d24e6f0897",
              url: "https://www.instagram.com/_seanka/",
              published: true,
            },
            email: {
              url: "",
              published: true,
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_gmail.png?alt=media&token=f0742a0b-d213-48aa-ba28-d7e31b0889c4",
              position: 2,
            },
          },
        },
      },
      {
        id: "SECTION_TWO",
        data: {
          coverImage:
            "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Misc%2FIMG_5321-2.png?alt=media&token=e43241c9-1c77-4e6a-b0c6-e1635f43b5f2",
          demographic: [
            {
              title: "Location",
              position: 1,
              icon: "📍",
              value: "Jakarta, Indonesia",
            },
            {
              title: "Nationality",
              value: "Indonesian",
              position: 2,
              icon: "🌏",
            },
          ],
          greeting: "👋 It's Sean Anderson",
          headline: "Data Enthusiast - iOS Developer",
          categoryPublished: true,
          interest: [
            {
              icon: "👟",
              value: "Running",
              title: "Hobby",
              position: 1,
            },
            {
              value: "Fried Rice",
              icon: "🍴",
              position: 2,
              title: "Favorite Food",
            },
          ],
          contact: {
            linkedin: {
              published: true,
              url: "https://www.linkedin.com/in/seankristian/",
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_linkedin.png?alt=media&token=1d78b1b6-e969-4bdf-8eeb-effaa24d5457",
              position: 1,
            },
            whatsapp: {
              url: "http://wa.me/+6282117320004",
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_whatsapp.png?alt=media&token=8fadee08-1fb8-41e0-9f3d-694bdb4c9b1b",
              published: true,
              position: 4,
            },
            instagram: {
              position: 3,
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_instagram.png?alt=media&token=ecf46739-de5d-4628-a39c-93d24e6f0897",
              url: "https://www.instagram.com/_seanka/",
              published: true,
            },
            email: {
              url: "",
              published: true,
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_gmail.png?alt=media&token=f0742a0b-d213-48aa-ba28-d7e31b0889c4",
              position: 2,
            },
          },
        },
      },
      {
        id: "SECTION_TWO",
        data: {
          coverImage:
            "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Misc%2FIMG_5321-2.png?alt=media&token=e43241c9-1c77-4e6a-b0c6-e1635f43b5f2",
          demographic: [
            {
              title: "Location",
              position: 1,
              icon: "📍",
              value: "Jakarta, Indonesia",
            },
            {
              title: "Nationality",
              value: "Indonesian",
              position: 2,
              icon: "🌏",
            },
          ],
          greeting: "👋 It's Sean Anderson",
          headline: "Data Enthusiast - iOS Developer",
          categoryPublished: true,
          interest: [
            {
              icon: "👟",
              value: "Running",
              title: "Hobby",
              position: 1,
            },
            {
              value: "Fried Rice",
              icon: "🍴",
              position: 2,
              title: "Favorite Food",
            },
          ],
          contact: {
            linkedin: {
              published: true,
              url: "https://www.linkedin.com/in/seankristian/",
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_linkedin.png?alt=media&token=1d78b1b6-e969-4bdf-8eeb-effaa24d5457",
              position: 1,
            },
            whatsapp: {
              url: "http://wa.me/+6282117320004",
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_whatsapp.png?alt=media&token=8fadee08-1fb8-41e0-9f3d-694bdb4c9b1b",
              published: true,
              position: 4,
            },
            instagram: {
              position: 3,
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_instagram.png?alt=media&token=ecf46739-de5d-4628-a39c-93d24e6f0897",
              url: "https://www.instagram.com/_seanka/",
              published: true,
            },
            email: {
              url: "",
              published: true,
              image:
                "https://firebasestorage.googleapis.com/v0/b/react-portofolio-web.appspot.com/o/Icons-Contact%2Fic_gmail.png?alt=media&token=f0742a0b-d213-48aa-ba28-d7e31b0889c4",
              position: 2,
            },
          },
        },
      },
    ];

    const sortedHome = home.map((section) => ({
      id: section.id,
      data: {
        coverImage: section.data.coverImage,
        demographic: ArrayExtension.SortArrayByPosition(
          section.data.demographic,
        ),
        greeting: section.data.greeting,
        headline: section.data.headline,
        categoryPublished: section.data.categoryPublished,
        interest: ArrayExtension.SortArrayByPosition(section.data.interest),
        listContact: ArrayExtension.SortArrayByPosition(
          Object.values(section.data.contact),
        ),
      },
    })) as BaseResponse<Home>[];

    setHome(sortedHome);
    setIsLoading(false);
  }

  return { Home, IsLoading, requestHomeData };
};

export default HomeViewModel;
