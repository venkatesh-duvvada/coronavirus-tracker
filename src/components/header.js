import React from "react";

import { AppBar, Box } from "@material-ui/core";

import "./header.css";

export default function Header({ heading }) {
  return (
    <AppBar position="static" className="app-bar">
      <Box align="center" className="heading">
        {heading}
      </Box>
    </AppBar>
  );
}
