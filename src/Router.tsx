import { createBrowserRouter } from "react-router-dom";

import { RouteNavigation } from "./Common/Enum/RouteNavigation";

import PortfolioViewController from "./Presentation/Portfolio/ViewController/PortfolioViewController";
import { RootViewController } from "./Presentation/Modules/Core/Root/ViewController/RootViewController";
import { HomeViewController } from "./Presentation/Modules/Home/ViewController/HomeViewController";

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
          path: RouteNavigation.portfolio,
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
