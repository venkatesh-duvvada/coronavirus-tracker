import React from "react";

import { AppBar, Box } from "@material-ui/core";

export default function Header({ heading }) {
  return (
    <AppBar position="static">
      <Box align="center">
        <h3>{heading}</h3>
      </Box>
    </AppBar>
  );
}
