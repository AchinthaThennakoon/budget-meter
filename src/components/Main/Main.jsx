import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  List,
  Typography,
} from "@material-ui/core";
import React from "react";
import Form from "./Form/Form";
import useStyles from "./style";

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="expense tracker" subheader="Pwered by speechly" />
        <CardContent>
          <Typography align="center" variant="h5">
            Total balance $100
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ lineHeight: "1.5cm", marginTop: "20px" }}
          >
            {/* infocard */}
            add income for $100
          </Typography>
          <Divider />
          <Form />
        </CardContent>
        <CardContent className={classes.CardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* <List/> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Main;
