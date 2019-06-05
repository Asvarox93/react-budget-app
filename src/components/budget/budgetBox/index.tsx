import React, { useEffect } from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import * as budgetBoxInterface from "../../interfaces/budgetBox_interface";
import clsx from "clsx";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    marginTop: 7,
    height: 65
  },
  incomes: {
    backgroundColor: "#43A047"
  },
  expenses: {
    backgroundColor: "#D22F2F"
  },
  available: {
    backgroundColor: "#3F51B5"
  }
}));

const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const BudgetBox: React.FC<budgetBoxInterface.props> = props => {
  const classes = useStyle();
  const incomesBgc = clsx(classes.paper, classes.incomes);
  const expensesBgc = clsx(classes.paper, classes.expenses);
  const availableBgc = clsx(classes.paper, classes.available);
  const { incomesSum, expensesSum } = props;
  const [availableBudget, setAvailableBudget] = React.useState<number>(0);
  const [expensesPercent, setExpensesPercent] = React.useState<number>(0);

  const getCurrentMonth = () => {
    const data = new Date();
    const currentMonth = data.getMonth();
    return Months[currentMonth];
  };

  const setDataForExpPerc = () => {
    let expPerc = Math.floor(((expensesSum * 100) / incomesSum) * 100) / 100;
    if (expPerc > 100) expPerc = 100;

    return expPerc;
  };

  const setDataForAvBudget = () => {
    return Math.floor((incomesSum - expensesSum) * 100) / 100;
  };

  useEffect(() => {
    const expPerc = setDataForExpPerc();
    const avBudget = setDataForAvBudget();
    setAvailableBudget(avBudget);
    setExpensesPercent(expPerc ? expPerc : 0);
    // eslint-disable-next-line
  }, [incomesSum, expensesSum]);

  return (
    <Grid item xs={12} md={4} lg={3}>
      <Typography>Available Budget in {getCurrentMonth()}:</Typography>
      <Paper className={incomesBgc}>
        <Typography>Incomes: {incomesSum}$</Typography>
      </Paper>
      <Paper className={expensesBgc}>
        <Typography>Expenses: {expensesSum}$</Typography>
        <Typography>{expensesPercent}%</Typography>
      </Paper>
      <Paper className={availableBgc}>
        <Typography>Available: {availableBudget}$</Typography>
      </Paper>
    </Grid>
  );
};

export default BudgetBox;
