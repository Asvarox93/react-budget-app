import React from "react";
import { Grid, Paper, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { Props } from "../../../interfaces/newItem/newItemForm_interface";
import SnackBar from "../../../budget/addForm/presentation//snackBar";
import TextFields from "../../../budget/addForm/presentation/textFields";
import SelectField from "../../../budget/addForm/presentation/selectField";
import SubmitButton from "../../../budget/addForm/presentation/submitButton";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    width: "100%"
  },
  fixedHeight: {
    height: 140,
    [theme.breakpoints.down("xs")]: {
      height: 260
    }
  },
  form: {
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap"
    }
  }
}));

const NewItemForm: React.FC<Props> = ({
  list,
  handleListChange,
  note,
  handleNoteChange,
  validateInputs,
  setSelectOption,
  errors
}) => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid item xs={12} md={7} lg={7}>
      <SnackBar snackbar={errors.length > 0 ? true : false} errors={errors} />
      <Paper className={fixedHeightPaper}>
        <Typography>Add Item To List</Typography>
        <form className={classes.form} onSubmit={validateInputs}>
          <SelectField
            value={list}
            label="Choose List"
            range={setSelectOption()}
            handleChange={handleListChange}
          />
          <TextFields
            value={note}
            label="Description"
            handleChange={handleNoteChange}
          />
          <SubmitButton validateInputs={validateInputs} />
        </form>
      </Paper>
    </Grid>
  );
};

export default NewItemForm;
