import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2" gutterBottom>
            ...
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>category</InputLabel>
            <Select>
              <MenuItem value="business">business</MenuItem>
              <MenuItem value="salary">salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField type="number" label="Amount" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField type="date" label="Date" fullWidth />
        </Grid>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth
        >
          Create
        </Button>
      </Grid>
    </div>
  );
};

export default Form;
