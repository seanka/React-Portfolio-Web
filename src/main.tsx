import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import "../index.css";
import { BentoViewController } from "./Presentation/Modules/Bento/ViewController/BentoViewController";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <BentoViewController />
  </ChakraProvider>,
);
