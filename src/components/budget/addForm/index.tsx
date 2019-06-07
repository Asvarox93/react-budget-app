import React from "react";
import * as addFormInterfaces from "../../interfaces/addForm/addForm_interface";
import Form from "./presentation";

const AddForm: React.FC<addFormInterfaces.Props> = props => {
  const { addToBudget } = props;

  const [values, setValues] = React.useState({
    amount: "",
    budgetType: "",
    description: ""
  });
  const [errors, setErrors] = React.useState<string[]>([]);
  const [snackbar, setSnackbar] = React.useState<boolean>(false);

  const handleChange = (prop: string) => (event: {
    target: { value: number | string };
  }) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const validateInputs = () => {
    const amount = values.amount;
    const budgetType = values.budgetType;
    const description = values.description;
    let inputErrors: string[] = [];
    /* eslint-disable */
    // prettier-ignore
    const amountReg = RegExp(/^(0|([1-9][0-9]*))(\.[0-9]+)?$/);
    /* eslint-enable */

    if (!amount || !budgetType || !description)
      inputErrors = [...inputErrors, "Fields cannot be empty!"];

    if (amount && !amountReg.test(amount))
      inputErrors = [
        ...inputErrors,
        "Amount cannot contains any characters and comma!"
      ];
    if (description && description.length < 3)
      inputErrors = [
        ...inputErrors,
        "Description must contains min. 3 characters!"
      ];

    if (inputErrors.length > 0) {
      setErrors(inputErrors);
      setSnackbar(true);
      return;
    }
    setSnackbar(false);
    handleSubmit();
  };

  const handleSubmit = () => {
    addToBudget(values);
  };

  return (
    <Form
      snackbar={snackbar}
      errors={errors}
      values={values}
      handleChange={handleChange}
      validateInputs={validateInputs}
    />
  );
};

export default AddForm;
