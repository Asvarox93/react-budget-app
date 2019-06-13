import React from "react";
import { Grid, Paper, makeStyles, Container } from "@material-ui/core";
import clsx from "clsx";
import { Props } from "../../interfaces/budget/budgetGui_interface";
import AddForm from "../addForm";
import BudgetItems from "../budgetItems";
import BudgetBox from "../budgetBox";
import BudgetChart from "../budgetChart";

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
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const BudgetGui: React.FC<Props> = ({
  chartIncomesData,
  chartExpensesData,
  incomesSum,
  expensesSum,
  getDataForFormVal,
  formVal,
  setIncomesSum,
  setChartIncomesData,
  setExpensesSum,
  setChartExpensesData
}) => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const title = {
    incomes: "incomes",
    expenses: "expenses"
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
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
          budgetItemVal={formVal.incomes}
          setBudgetItemSum={setIncomesSum}
          setChartData={setChartIncomesData}
        />
        <BudgetItems
          budgetItemTitle={title.expenses}
          budgetItemVal={formVal.expenses}
          setBudgetItemSum={setExpensesSum}
          setChartData={setChartExpensesData}
        />
      </Grid>
    </Container>
  );
};

export default BudgetGui;
