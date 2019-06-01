export interface state {
  incomes: Array<Object>;
}

export interface props {
  incomeVal: {
    amount?: string;
  };
  incomesSum: object;
  setIncomeSum: any;
}
