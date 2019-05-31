import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import AddForm from "./addForm";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  form: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    justifyContent: "center"
  }
}));

const Budget: React.FC = props => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Typography>Monthly</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Typography>Todo Tasks</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.form}>
          <AddForm />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={fixedHeightPaper}>
          <Typography>Income</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={fixedHeightPaper}>
          <Typography>Expanse</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Budget;
