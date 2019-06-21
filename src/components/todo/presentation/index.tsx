import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import NewListForm from "../newListForm";
import NewItemForm from "../newItemForm";
import TodoLists from "./todoLists";

const useStyle = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const TodoGui: React.FC<any> = ({
  dispatch,
  getCurrentListsName,
 state
}) => {
  const classes = useStyle();
  return (
    <Container maxWidth={false} className={classes.container}>
      <Grid container spacing={3}>
        <NewListForm
          dispatch={dispatch}
          getCurrentListsName={getCurrentListsName}
        />
        <NewItemForm
          dispatch={dispatch}
          getCurrentListsName={getCurrentListsName}
        />
        <TodoLists state={state} dispatch={dispatch} />
      </Grid>
    </Container>
  );
};

export default TodoGui;
