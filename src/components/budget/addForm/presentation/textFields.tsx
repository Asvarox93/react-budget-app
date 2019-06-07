import React, { Fragment } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import * as textFieldsInterfaces from "../../../interfaces/addForm/textFields_interface";

const useStyle = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 300
  }
}));

const TextFields: React.FC<textFieldsInterfaces.Props> = ({
  values,
  handleChange
}) => {
  const classes = useStyle();
  return (
    <Fragment>
      <TextField
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Description"
        value={values.description}
        onChange={handleChange("description")}
      />
      <TextField
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Amount"
        value={values.amount}
        onChange={handleChange("amount")}
      />
    </Fragment>
  );
};

export default TextFields;
