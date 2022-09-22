import { Grid } from "@material-ui/core";
import React from "react";
import Details from "./components/Details/Details";
import useStyle from "./style";

function App() {
  const classes = useStyle();
  return (
    <>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          main
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expenses" />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
