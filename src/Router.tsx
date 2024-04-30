import { createBrowserRouter } from "react-router-dom";

import Root from "./Presentation/Common/Root";
import PortfolioViewController from "./Presentation/Portfolio/ViewController/PortfolioViewController";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/portfolio",
        element: <PortfolioViewController />,
      },
    ],
  },
]);

export default Router;
