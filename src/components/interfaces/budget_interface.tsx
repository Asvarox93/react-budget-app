export interface state {
  incomesFormValue: object;
  expensesFormValue: object;
}

export interface form {
  amount: string;
  budgetType: string;
  description: string;
}

export interface budgetSumState {
  incomesSum: number;
  expensesSum: number;
}