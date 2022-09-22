import { Grid } from "@material-ui/core";
import React from "react";
import Details from "./components/Details/Details";
import "./style";

function App() {
  return (
    <>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details />
        </Grid>
        <Grid item xs={12} sm={4}>
          main
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
