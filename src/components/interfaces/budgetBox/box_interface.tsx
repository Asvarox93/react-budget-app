export interface Props {
  getCurrentMonth: () => string;
  incomesSum: number;
  expensesSum: number;
  expensesPercent: number;
  availableBudget: number;
}

export interface Budget {
  incomes: string;
  incomesBgc: "incomes";
  expenses: string;
  expensesBgc: "expenses";
  balance: string;
  balanceBgc: "balance";
}
