import React, { useState } from "react";
import { Grid, Paper, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import TextFields from "../../budget/addForm/presentation/textFields";
import SelectField from "../../budget/addForm/presentation/selectField";
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
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    width: "100%"
  }
}));

const NewItem: React.FC<any> = ({ dispatch, getCurrentListsName }) => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [list, setList] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const handleNoteChange = () => (event: any) => {
    setNote(event.target.value);
  };

  const handleListChange = () => (event: any) => {
    setList(event.target.value);
  };

  const getUniqueId = () => {
    return (
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .substr(2, 5)
    ).toUpperCase();
  };

  const setSelectOption = () => {
    const range = getCurrentListsName().map((item: any) => ({
      value: item,
      label: item
    }));

    return range;
  };

  const validateInputs = (e?: any) => {
    e.preventDefault();
    // TODO: make validation and errors apear

    dispatch({
      type: "ADD_LIST_ITEM",
      payload: { id: getUniqueId(), note: note },
      listName: list
    });
  };

  return (
    <Grid item xs={12} md={7} lg={7}>
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
            label="List Name"
            handleChange={handleNoteChange}
          />
          <SubmitButton validateInputs={validateInputs} />
        </form>
      </Paper>
    </Grid>
  );
};

export default NewItem;

//TODO: Refactoring component to small pieces and better code
