import { useLocation, useNavigate, useParams } from "react-router-dom";

import { NavigationProps } from "../../../Domain/Entities/Core/NavigationProps";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const param = useParams();

  const navigateToPath = (props: NavigationProps) => {
    const { path, params, replace = false } = props;

    navigate(path, { state: params, replace: replace });
  };

  const getCurrentPath = () => {
    const segments = location.pathname.split("/").filter(Boolean);
    return segments.length > 0 ? `/${segments[0]}` : null;
  };

  const getUrlParam = () => {
    return param;
  };

  return {
    getUrlParam,
    navigateToPath,
    getCurrentPath,
  };
};

export default Navigation;
