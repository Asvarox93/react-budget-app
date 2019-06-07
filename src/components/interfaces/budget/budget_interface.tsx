export type Data = {
  description: string;
  budgetType: string;
  amount: string;
};

export interface State {
  incomes: Data;
  expenses: Data;
}

export interface Form {
  amount: string;
  budgetType: string;
  description: string;
}
