import React from "react";
import { Grid, Paper, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { Props } from "../../../interfaces/newList/newListForm_interface";
import TextFields from "../../../budget/addForm/presentation/textFields";
import SubmitButton from "../../../budget/addForm/presentation/submitButton";
import SnackBar from "../../../budget/addForm/presentation/snackBar";

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
      height: 190
    }
  },
  form: {
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap"
    }
  }
}));

const NewListForm: React.FC<Props> = ({
  listName,
  handleChange,
  validateInputs,
  errors
}) => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid item xs={12} md={5} lg={5}>
      <SnackBar snackbar={errors.length > 0 ? true : false} errors={errors} />
      <Paper className={fixedHeightPaper}>
        <Typography>Add New List</Typography>
        <form className={classes.form} onSubmit={validateInputs}>
          <TextFields
            value={listName}
            label="List Name"
            handleChange={handleChange}
          />
          <SubmitButton validateInputs={validateInputs} />
        </form>
      </Paper>
    </Grid>
  );
};

export default NewListForm;
