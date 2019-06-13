import React, { useState } from "react";
import { Grid, Paper, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import TextFields from "../../budget/addForm/presentation/textFields";
import SubmitButton from "../../budget/addForm/presentation/submitButton";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    width: "100%"
  },
  fixedHeight: {
    height: 140
  },
  form: {
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
}));

const NewList: React.FC<any> = ({ dispatch, getCurrentListsName }) => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [listName, setListName] = useState<string>("");

  const handleChange = () => (event: any) => {
    setListName(event.target.value);
  };

  const validateInputs = (e?: any) => {
    e.preventDefault();
    const currentLists: Array<string> = getCurrentListsName();

    if (currentLists.includes(listName)) {
      // TODO: make validation and errors apear
      console.log("error! Nazwa istnieje");
      return;
    }

    dispatch({ type: "ADD_LIST", payload: listName });
  };

  return (
    <Grid item xs={12} md={5} lg={5}>
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

export default NewList;

//TODO: Refactoring component to small pieces and better code
