import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToPath = (path: string, params?: Object) => {
    navigate(path, { state: params });
  };

  const getCurrentPath = () => {
    return location.pathname;
  };

  return {
    navigateToPath,
    getCurrentPath,
  };
};

export default Navigation;
