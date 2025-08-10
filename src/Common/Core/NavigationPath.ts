import NavigationPathItem from "../Interface/NavigationPathItem";

const NavigationPath: Record<string, NavigationPathItem> = {
  home: { title: "Home", path: "/home" },
  about: { title: "About Me", path: "/about" },
  projects: { title: "Projects", path: "/portfolio" },
};

export default NavigationPath;
