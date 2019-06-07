import React from "react";
import { SnackbarContent, Typography, makeStyles } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import * as snackBarInterfaces from "../../../interfaces/addForm/snackBar_interface";

const useStyle = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  messageErrors: {
    display: "flex",
    flexDirection: "column"
  },
  snackbar: {
    visibility: "visible",
    opacity: 1,
    height: "auto",
    backgroundColor: theme.palette.error.dark,
    justifyContent: "center",
    transition: "all 0.4s ease-in-out"
  },
  snackbarHidden: {
    visibility: "hidden",
    opacity: 0,
    height: 0,
    transition: "all 0.4s ease-in-out"
  }
}));

const SnackBar: React.FC<snackBarInterfaces.Props> = ({ errors, snackbar }) => {
  const classes = useStyle();
  return (
    <SnackbarContent
      className={snackbar ? classes.snackbar : classes.snackbarHidden}
      aria-describedby="client-snackbar"
      message={
        <span className={classes.message}>
          <ErrorIcon className={classes.margin} />
          <span className={classes.messageErrors}>
            {errors.map((err, index) => {
              return (
                <Typography key={index} variant="body2">
                  {err}
                </Typography>
              );
            })}
          </span>
        </span>
      }
    />
  );
};

export default SnackBar;
