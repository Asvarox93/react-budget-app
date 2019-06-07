import React from "react";
import { Grid, Typography } from "@material-ui/core";
import * as boxInterfaces from "../../../interfaces/budgetBox/box_interface";
import Item from "./boxItem";

const budget: boxInterfaces.Budget = {
  incomes: "Incomes",
  incomesBgc: "incomes",
  expenses: "Expenses",
  expensesBgc: "expenses",
  balance: "Balance",
  balanceBgc: "balance"
};

const Box: React.FC<boxInterfaces.Props> = ({
  getCurrentMonth,
  incomesSum,
  expensesSum,
  expensesPercent,
  availableBudget
}) => {
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Typography>Available Budget in {getCurrentMonth()}:</Typography>
      <Item
        itemTitle={budget.incomes}
        itemSum={incomesSum}
        itemColor={budget.incomesBgc}
      />
      <Item
        itemTitle={budget.expenses}
        itemSum={expensesSum}
        itemPercent={expensesPercent}
        itemColor={budget.expensesBgc}
      />
      <Item
        itemTitle={budget.balance}
        itemSum={availableBudget}
        itemColor={budget.balanceBgc}
      />
    </Grid>
  );
};

export default Box;
