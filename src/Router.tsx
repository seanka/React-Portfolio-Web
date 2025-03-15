import { createBrowserRouter } from "react-router-dom";

import { RootViewController } from "./Presentation/Modules/Core/Root/ViewController/RootViewController";
import { HomeViewController } from "./Presentation/Modules/Home/ViewController/HomeViewController";
import { AboutViewController } from "./Presentation/Modules/About/ViewController/AboutViewController";
import { PortfolioViewController } from "./Presentation/Modules/Portfolio/ViewController/PortfolioViewController";
import NavigationPath from "./Common/Core/NavigationPath";

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
          path: NavigationPath.about.path,
          element: <AboutViewController />,
        },
        {
          path: `${NavigationPath.projects.path}/:category?`,
          element: <PortfolioViewController />,
        },
        {
          path: NavigationPath.contact.path,
          element: <PortfolioViewController />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default Router;
