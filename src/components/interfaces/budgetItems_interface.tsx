export interface state {
  data: Array<Object>;
}

export interface props {
  budgetItemVal: {
    amount?: string;
  };
  budgetItemTitle: string;
  setBudgetItemSum: Function;
  setChartData: Function;
}
