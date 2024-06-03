import React from "react";
import { Box } from "@chakra-ui/react";

import "../Loader/LoaderCSS.css";

import { Colors } from "../../../Common/Enum/Assets/Colors";

const Loader: React.FC = () => {
  return (
    <Box height="100vh" bgColor={Colors.blue} display="flex" justifyContent="center" alignItems="center">
      <Box h={34} className="loader" />
    </Box>
  );
};

export default Loader;
