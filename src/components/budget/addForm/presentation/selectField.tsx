import React from "react";
import { TextField, MenuItem, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import * as selectFieldInterfaces from "../../../interfaces/addForm/selectField_interface";

const useStyle = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 300
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

const SelectField: React.FC<selectFieldInterfaces.Props> = ({
  values,
  handleChange
}) => {
  const classes = useStyle();
  return (
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
  );
};

export default SelectField;
