export interface Props {
  chartIncomesData: Array<object>;
  chartExpensesData: Array<object>;
}

export type Data = {
  date: string;
  incomes: number;
  expenses: number;
};
