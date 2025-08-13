import { createBrowserRouter } from "react-router-dom";

import NavigationPath from "./Common/Core/NavigationPath";

import { HomeViewController } from "./Presentation/Modules/Home/ViewController/HomeViewController";
import { AboutViewController } from "./Presentation/Modules/About/ViewController/AboutViewController";
import { RootViewController } from "./Presentation/Modules/Core/Root/ViewController/RootViewController";
import { PortfolioViewController } from "./Presentation/Modules/Portfolio/ViewController/PortfolioViewController";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootViewController />,
      children: [
        {
          path: NavigationPath.home.path,
          element: <HomeViewController />,
        },
        {
          path: `${NavigationPath.about.path}/:category?`,
          element: <AboutViewController />,
        },
        {
          path: `${NavigationPath.projects.path}/:category?/:item?`,
          element: <PortfolioViewController />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default Router;
