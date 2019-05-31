import React from "react";
import {
  TextField,
  MenuItem,
  InputAdornment,
  makeStyles,
  Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 400
  },
  button: {
    margin: theme.spacing(1),
    alignSelf: "center"
  }
}));

const ranges = [
  {
    value: "income",
    label: "Income"
  },
  {
    value: "expense",
    label: "Expense"
  }
];

const AddForm: React.FC = props => {
  const classes = useStyle();

  const [values, setValues] = React.useState({
    amount: 0,
    budgetType: ""
  });

  const handleChange = (prop: string) => (event: {
    target: { value: number | string };
  }) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    console.log("działam");
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
        label="Amount"
        value={values.amount}
        onChange={handleChange("amount")}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
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
