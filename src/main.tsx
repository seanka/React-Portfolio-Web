import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={Router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
