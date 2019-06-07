import React, { useEffect } from "react";
import * as budgetBoxInterface from "../../interfaces/budgetBox/budgetBox_interface";
import Box from "./presentation";

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

const BudgetBox: React.FC<budgetBoxInterface.props> = ({
  incomesSum,
  expensesSum
}) => {
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
    <Box
      getCurrentMonth={getCurrentMonth}
      incomesSum={incomesSum}
      expensesSum={expensesSum}
      expensesPercent={expensesPercent}
      availableBudget={availableBudget}
    />
  );
};

export default BudgetBox;
