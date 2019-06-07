import React from "react";
import { makeStyles, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import * as submitButtonInterfaces from "../../../interfaces/addForm/submitButton_interface";

const useStyle = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    alignSelf: "center"
  }
}));

const SubmitButton: React.FC<submitButtonInterfaces.Props> = ({
  validateInputs
}) => {
  const classes = useStyle();
  return (
    <Fab
      size="small"
      color="secondary"
      aria-label="Add"
      className={classes.button}
      onClick={validateInputs}
    >
      <AddIcon />
    </Fab>
  );
};

export default SubmitButton;
