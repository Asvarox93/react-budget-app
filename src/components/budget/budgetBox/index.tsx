import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import * as budgetBoxInterface from "../../interfaces/budgetBox_interface";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: 240
  }
}));

const BudgetBox: React.FC<budgetBoxInterface.props> = props => {
  const classes = useStyle();
  const { incomesSum, expensesSum } = props.budgetSum;
  const available = incomesSum - expensesSum;

  return (
    <Grid item xs={12} md={4} lg={3}>
      <Paper className={classes.paper}>
        <Typography>
          Available Budget in MONTH: <br /> In: {incomesSum}
          <br /> Ex: {expensesSum} <br />
          Av: {available}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default BudgetBox;
