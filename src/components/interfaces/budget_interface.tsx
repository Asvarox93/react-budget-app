export interface state {
  incomes: Array<Object>;
  expenses: Array<Object>;
  incomesSum: number;
  expensesSum: number;
}

export interface form {
  amount: string;
  budgetType: string;
  description: string;
}
