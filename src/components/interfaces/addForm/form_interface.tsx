export interface Props {
  snackbar: boolean;
  errors: string[];
  values: {
    amount: string;
    budgetType: string;
    description: string;
  };
  handleChange: Function;
  validateInputs: () => void;
}
