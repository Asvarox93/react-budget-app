import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import * as formInterfaces from "../../../interfaces/addForm/form_interface";
import SnackBar from "./snackBar";
import SelectField from "./selectField";
import TextFields from "./textFields";
import SubmitButton from "./submitButton";

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    justifyContent: "center"
  },
  form: {
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%"
  }
}));

const Form: React.FC<formInterfaces.Props> = ({
  snackbar,
  errors,
  values,
  ranges,
  handleChange,
  validateInputs
}) => {
  const { budgetType, description, amount } = values;

  const classes = useStyle();
  return (
    <Grid item xs={12}>
      <SnackBar snackbar={snackbar} errors={errors} />
      <Paper className={classes.root}>
        <form className={classes.form}>
          <SelectField
            value={budgetType}
            valueVerible={Object.keys({ budgetType })[0]}
            label="Budget Type"
            handleChange={handleChange}
            range={ranges}
          />
          <TextFields
            value={description}
            valueVerible={Object.keys({ description })[0]}
            label="Description"
            handleChange={handleChange}
          />
          <TextFields
            value={amount}
            valueVerible={Object.keys({ amount })[0]}
            label="Amount"
            handleChange={handleChange}
          />
          <SubmitButton validateInputs={validateInputs} />
        </form>
      </Paper>
    </Grid>
  );
};

export default Form;
