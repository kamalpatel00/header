import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

export default (props) => (
  <Grid container sm={12}>
    <Grid item sm>
      <Paper>Left Pane</Paper>
    </Grid>
    <Grid item sm>
      <Paper>Right Pane</Paper>
    </Grid>
  </Grid>
);
