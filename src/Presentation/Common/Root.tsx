import { Navigate, Outlet } from "react-router-dom";

import { RouteNavigation } from "../../Common/Enum/RouteNavigation";

function Root() {
  return (
    <>
      <Navigate to={RouteNavigation.portfolio} />
      <Outlet />;
    </>
  );
}

export default Root;
