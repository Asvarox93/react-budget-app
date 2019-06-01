import React from "react";
import { TextField, MenuItem, makeStyles, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";
import * as addFormInterfaces from "../../interfaces/addForm_interface";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 300
  },
  button: {
    margin: theme.spacing(1),
    alignSelf: "center"
  }
}));

const ranges = [
  {
    value: "incomes",
    label: "Incomes"
  },
  {
    value: "expenses",
    label: "Expenses"
  }
];

const AddForm: React.FC<addFormInterfaces.Props> = props => {
  const classes = useStyle();

  const [values, setValues] = React.useState({
    amount: "",
    budgetType: "",
    description: ""
  });

  const handleChange = (prop: string) => (event: {
    target: { value: number | string };
  }) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    props.addToBudget(values);
  };

  return (
    <form className={classes.root}>
      <TextField
        select
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Budget Type"
        value={values.budgetType}
        onChange={handleChange("budgetType")}
      >
        {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-adornment-amount"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Description"
        value={values.description}
        onChange={handleChange("description")}
      />
      <TextField
        id="outlined-adornment-amount"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Amount"
        value={values.amount}
        onChange={handleChange("amount")}
      />
      <Fab
        size="small"
        color="secondary"
        aria-label="Add"
        className={classes.button}
      >
        <AddIcon onClick={handleSubmit} />
      </Fab>
    </form>
  );
};

export default AddForm;
