import React from "react";
import BudgetGui from "./presentation";
import { State, Form } from "../interfaces/budget/budget_interface";

const initalState = {
  incomes: {
    description: "",
    budgetType: "",
    amount: ""
  },
  expenses: {
    description: "",
    budgetType: "",
    amount: ""
  }
};
const Budget: React.FC = props => {
  const [formVal, setFormVal] = React.useState<State>(initalState);

  const [incomesSum, setIncomesSum] = React.useState<number>(0);
  const [expensesSum, setExpensesSum] = React.useState<number>(0);
  const [chartIncomesData, setChartIncomesData] = React.useState<Array<object>>(
    []
  );
  const [chartExpensesData, setChartExpensesData] = React.useState<
    Array<object>
  >([]);

  const getDataForFormVal = (form: Form) => {
    const { budgetType } = form;
    setFormVal({
      ...formVal,
      [budgetType]: { ...form }
    });
  };

  return (
    <BudgetGui
      chartIncomesData={chartIncomesData}
      chartExpensesData={chartExpensesData}
      incomesSum={incomesSum}
      expensesSum={expensesSum}
      getDataForFormVal={getDataForFormVal}
      formVal={formVal}
      setIncomesSum={setIncomesSum}
      setChartIncomesData={setChartIncomesData}
      setExpensesSum={setExpensesSum}
      setChartExpensesData={setChartExpensesData}
    />
  );
};

export default Budget;
