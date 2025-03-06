import NavigationPathItem from "../Interface/NavigationPathItem";

const NavigationPath: Record<string, NavigationPathItem> = {
  home: { title: "Home", path: "/home" },
  about: { title: "About Me", path: "/about" },
  projects: { title: "Projects", path: "/portfolio" },
  contact: { title: "Contact Me", path: "/contact" },
};
// const NavigationPath: NavigationPathItem[] = [
//   {
//     title: "Home",
//     path: "/home",
//   },
//   {
//     title: "About Me",
//     path: "/about",
//   },
//   {
//     title: "Projects",
//     path: "/portfolio",
//   },
//   {
//     title: "Contact Me",
//     path: "/contact",
//   },
// ];

export default NavigationPath;
