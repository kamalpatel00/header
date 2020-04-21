import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

export default (props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Hello
      </Typography>
    </Toolbar>
  </AppBar>
);
