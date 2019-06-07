export type Data = {
  id: string;
  description: string;
  budgetType: string;
  added: string;
  amount: string;
};

export interface State {
  data: Data[];
}

export interface Props {
  budgetItemVal: {
    amount: string;
    description: string;
    budgetType: string;
  };
  budgetItemTitle: string;
  setBudgetItemSum: Function;
  setChartData: Function;
}
