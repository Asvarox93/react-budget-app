import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import * as budgetInterfaces from "../interfaces/budget_interface";
import AddForm from "./addForm";
import BudgetItems from "./budgetItems";
import BudgetBox from "./budgetBox";
import BudgetChart from "./budgetChart";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

const Budget: React.FC = props => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const title = {
    incomes: "Incomes",
    expenses: "Expenses"
  };

  const formValParametrs = {
    incomes: "incomesFormValue",
    expenses: "expensesFormValue"
  };

  const [formVal, setFormVal] = React.useState<budgetInterfaces.state>({
    incomesFormValue: {},
    expensesFormValue: {}
  });

  const [incomesSum, setIncomesSum] = React.useState<number>(0);
  const [expensesSum, setExpensesSum] = React.useState<number>(0);
  const [chartIncomesData, setChartIncomesData] = React.useState<Array<object>>(
    []
  );
  const [chartExpensesData, setChartExpensesData] = React.useState<
    Array<object>
  >([]);

  const getDataForFormVal = (form: budgetInterfaces.form) => {
    const { budgetType } = form;
    if (budgetType === title.incomes) {
      addToFormVal(form, formValParametrs.incomes);
    }
    if (budgetType === title.expenses) {
      addToFormVal(form, formValParametrs.expenses);
    }
  };

  const addToFormVal = (data: object, formValType: string) => {
    setFormVal({
      ...formVal,
      [formValType]: { ...data }
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <BudgetChart
            chartIncomesData={chartIncomesData}
            chartExpensesData={chartExpensesData}
          />
        </Paper>
      </Grid>
      <BudgetBox incomesSum={incomesSum} expensesSum={expensesSum} />
      <AddForm addToBudget={getDataForFormVal} />
      <BudgetItems
        budgetItemTitle={title.incomes}
        budgetItemVal={formVal.incomesFormValue}
        setBudgetItemSum={setIncomesSum}
        setChartData={setChartIncomesData}
      />
      <BudgetItems
        budgetItemTitle={title.expenses}
        budgetItemVal={formVal.expensesFormValue}
        setBudgetItemSum={setExpensesSum}
        setChartData={setChartExpensesData}
      />
    </Grid>
  );
};

export default Budget;
