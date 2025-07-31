import { createBrowserRouter } from "react-router-dom";

import NavigationPath from "./Common/Core/NavigationPath";

import { RootViewController } from "./Presentation/Modules/Core/Root/ViewController/RootViewController";
import { HomeViewController } from "./Presentation/Modules/Home/ViewController/HomeViewController";
import { AboutViewController } from "./Presentation/Modules/About/ViewController/AboutViewController";
import { PortfolioViewController } from "./Presentation/Modules/Portfolio/ViewController/PortfolioViewController";
import { ContactViewController } from "./Presentation/Modules/Contact/ViewController/ContactViewController";

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
          path: `${NavigationPath.projects.path}/:category?/:item?`,
          element: <PortfolioViewController />,
        },
        {
          path: NavigationPath.contact.path,
          element: <ContactViewController />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default Router;
