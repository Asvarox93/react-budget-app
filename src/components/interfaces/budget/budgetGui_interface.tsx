import { Dispatch, SetStateAction } from "react";

export interface Props {
  chartIncomesData: object[];
  chartExpensesData: object[];
  incomesSum: number;
  expensesSum: number;
  getDataForFormVal: (form: Form) => void;
  formVal: State;
  setIncomesSum: Dispatch<SetStateAction<number>>;
  setChartIncomesData: Dispatch<SetStateAction<object[]>>;
  setExpensesSum: Dispatch<SetStateAction<number>>;
  setChartExpensesData: Dispatch<SetStateAction<object[]>>;
}

type State = {
  incomes: Data;
  expenses: Data;
};

type Form = {
  amount: string;
  budgetType: string;
  description: string;
};

type Data = {
  description: string;
  budgetType: string;
  amount: string;
};
