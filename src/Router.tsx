import { createBrowserRouter } from "react-router-dom";

import { RouteNavigation } from "./Common/Enum/RouteNavigation";

import { RootViewController } from "./Presentation/Modules/Core/Root/ViewController/RootViewController";
import { HomeViewController } from "./Presentation/Modules/Home/ViewController/HomeViewController";
import { PortfolioViewController } from "./Presentation/Modules/Portfolio/ViewController/PortfolioViewController";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootViewController />,
      children: [
        {
          path: RouteNavigation.home,
          element: <HomeViewController />,
        },
        {
          path: RouteNavigation.about,
          element: <PortfolioViewController />,
        },
        {
          path: `${RouteNavigation.portfolio}/:category?`,
          element: <PortfolioViewController />,
        },
        {
          path: RouteNavigation.contact,
          element: <PortfolioViewController />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default Router;
