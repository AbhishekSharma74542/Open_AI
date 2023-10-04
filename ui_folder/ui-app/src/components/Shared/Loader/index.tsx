import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexGrow={1}
      height="100%"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
