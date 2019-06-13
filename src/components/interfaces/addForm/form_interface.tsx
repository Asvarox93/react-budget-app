export interface Props {
  snackbar: boolean;
  errors: string[];
  values: {
    amount: string;
    budgetType: string;
    description: string;
  };
  ranges: Array<RangeType>;
  handleChange: Function;
  validateInputs: () => void;
}

type RangeType = {
  value: string;
  label: string;
};
