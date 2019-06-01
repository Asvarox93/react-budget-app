import React, { useEffect } from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import * as budgetInterfaces from "../interfaces/budget_interface";
import AddForm from "./addForm";
import ListItems from "./listItems";

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

  const [budget, setBudget] = React.useState<budgetInterfaces.state>({
    incomes: [],
    expenses: [],
    incomesSum: 0,
    expensesSum: 0
  });

  const addToBudget = (form: budgetInterfaces.form) => {
    const { budgetType, amount, description } = form;
    const added = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");

    if (budgetType === "incomes") {
      const id = getIncomesId();
      addToIncomes({ id, amount, description, added });
    }
    if (budgetType === "expenses") {
      const id = getEspensesId();
      addToExpenses({ id, amount, description, added });
    }
  };

  const getIncomesId = () => {
    let id = 0;

    budget.incomes.forEach((item: any) => {
      if (item.id === id) {
        id++;
      }
    });

    return id;
  };

  const getEspensesId = () => {
    let id = 0;

    budget.expenses.forEach((item: any) => {
      if (item.id === id) {
        id++;
      }
    });

    return id;
  };

  const addToIncomes = (data: Object) => {
    setBudget({
      ...budget,
      incomes: [...budget.incomes, data]
    });
  };

  const addToExpenses = (data: Object) => {
    setBudget({
      ...budget,
      expenses: [...budget.expenses, data]
    });
  };

  const setIncomesSum = () => {
    let sum = 0;
    console.log("wbj");
    budget.incomes.forEach((item: any) => {
      console.log(item);
      sum += parseInt(item.amount);
      console.log(sum);
    });

    setBudget({
      ...budget,
      incomesSum: sum
    });
  };

  const setExpensesSum = () => {
    let sum = 0;
    budget.expenses.forEach((item: any) => {
      sum += parseInt(item.amount);
    });

    setBudget({
      ...budget,
      expensesSum: sum
    });
  };

  useEffect(() => {
    console.log(budget);
  }, [budget]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Typography>Monthly</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Typography>Available Budget in MONTH:</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.form}>
          <AddForm addToBudget={addToBudget} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={fixedHeightPaper}>
          <Typography>Income</Typography>
          <ListItems listData={budget.incomes} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={fixedHeightPaper}>
          <Typography>Expanse</Typography>
          <ListItems listData={budget.expenses} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Budget;
