import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import * as budgetInterfaces from "../interfaces/budget_interface";
import AddForm from "./addForm";
import Expenses from "./expenses";
import Incomes from "./incomes";
import BudgetBox from "./budgetBox";

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

  const [formVal, setFormVal] = React.useState<budgetInterfaces.state>({
    incomesFormValue: {},
    expensesFormValue: {}
  });

  const [budgetSum, setbudgetSum] = React.useState<
    budgetInterfaces.budgetSumState
  >({
    incomesSum: 0,
    expensesSum: 0
  });

  const addToFormVal = (form: budgetInterfaces.form) => {
    const { budgetType } = form;

    if (budgetType === "incomes") {
      addToIncomes(form);
    }
    if (budgetType === "expenses") {
      addToExpenses(form);
    }
  };

  const addToIncomes = (data: object) => {
    setFormVal({
      ...formVal,
      incomesFormValue: { ...data }
    });
  };

  const addToExpenses = (data: object) => {
    setFormVal({
      ...formVal,
      expensesFormValue: { ...data }
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Typography>Monthly</Typography>
        </Paper>
      </Grid>
      <BudgetBox budgetSum={budgetSum} />
      <Grid item xs={12}>
        <Paper className={classes.form}>
          <AddForm addToBudget={addToFormVal} />
        </Paper>
      </Grid>
      <Incomes
        incomeVal={formVal.incomesFormValue}
        incomesSum={budgetSum}
        setIncomeSum={setbudgetSum}
      />
      <Expenses
        expneseVal={formVal.expensesFormValue}
        expnesesSum={budgetSum}
        setExpensesSum={setbudgetSum}
      />
    </Grid>
  );
};

export default Budget;
