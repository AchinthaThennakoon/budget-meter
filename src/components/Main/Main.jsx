import { Card, CardHeader } from "@material-ui/core";
import React from "react";

const Main = () => {
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="expense tracker" subHeader="Pwered by speechly" />
      </Card>
    </div>
  );
};

export default Main;
