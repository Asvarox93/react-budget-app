import React, { useReducer } from "react";
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Container,
  List,
  ListItem
} from "@material-ui/core";
import NewListForm from "./newListForm";
import NewItemForm from "./newItemForm";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_LIST":
      return { ...state, [action.payload]: [] };
    case "REMOVE_LIST": {
      return [
        //
      ];
    }
    case "ADD_LIST_ITEM":
      return {
        ...state,
        [action.listName]: [...state[action.listName], action.payload]
      };
    case "REMOVE_LIST_ITEM":
      return {
        //
      };
    default: {
      return state;
    }
  }
};

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  renderList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  listTitle: {
    textAlign: "center",
    backgroundColor: "#3F51B5",
    color: "#fff",
    fontSize: "1,2rem",
    textTransform: "uppercase",
    fontWeight: 500,
    padding: "0.5rem 0"
  },
  listItem: {
    margin: "0 0.5rem 1rem 0.5rem"
  }
}));

const Todo: React.FC = () => {
  const classes = useStyle();

  const [state, dispatch] = useReducer(reducer, []);

  const getCurrentListsName = () => {
    return Object.keys(state);
  };

  const renderLists = () => {
    return Object.keys(state).map((obj, i) => {
      return (
        <Grid item xs={12} md={6} lg={4} key={i}>
          <Paper className={classes.listItem}>
            <div className={classes.listTitle}>{obj}</div>
            <List>
              {state[obj].map((item: any) => (
                <ListItem key={item.id}>
                  <Typography>{item.note}</Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      );
    });
  };

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

        <Grid item xs={12}>
          <Typography>Todo Lists</Typography>
          <Grid item xs={12} className={classes.renderList}>
            {renderLists()}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Todo;

//TODO: Refactoring component to small pieces and better code
