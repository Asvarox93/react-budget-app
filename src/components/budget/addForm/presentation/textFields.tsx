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
  value,
  valueVerible = null,
  label,
  handleChange
}) => {
  const classes = useStyle();
  return (
    <Fragment>
      <TextField
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label={label}
        value={value}
        onChange={handleChange(valueVerible)}
      />
    </Fragment>
  );
};

export default TextFields;
