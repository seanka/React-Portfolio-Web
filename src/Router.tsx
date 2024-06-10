import { createBrowserRouter } from "react-router-dom";

import { RouteNavigation } from "./Common/Enum/RouteNavigation";

import Root from "./Presentation/Common/Root";
import PortfolioViewController from "./Presentation/Portfolio/ViewController/PortfolioViewController";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: RouteNavigation.portfolio,
          element: <PortfolioViewController />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default Router;
