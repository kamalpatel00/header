import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default (Props) => (
  <Paper>
    <Tabs value={1} indicatorColor="primary" textColor="primary" centered>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
);
