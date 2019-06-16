import React, { useReducer } from "react";
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Container,
  List,
  ListItem,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import NewListForm from "./newListForm";
import NewItemForm from "./newItemForm";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_LIST":
      return { ...state, [action.payload]: [] };
    case "REMOVE_LIST": {
      return {
        ...action.payload
      };
    }
    case "ADD_LIST_ITEM":
      return {
        ...state,
        [action.listName]: [...state[action.listName], action.payload]
      };
    case "REMOVE_LIST_ITEM":
      return {
        ...state,
        [action.listName]: action.payload
      };
    case "REORDER_ITEMS":
      return {
        ...state,
        ...action.payload
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
    padding: "0.5rem 0",
    width: "100%"
  },
  listTitleSpan: {
    position: "absolute",
    right: "0.5rem",
    top: "0.2rem",
    color: "#fff",
    fontSize: "1.2rem",
    cursor: "pointer",
    padding: "0 0.4rem",
    margin: 0,
    "&:hover": {
      backgroundColor: "#5262bc"
    }
  },
  listPaper: {
    position: "relative",
    margin: "0 0.5rem 1rem 0.5rem"
  },
  listMenu: {
    display: "block",
    position: "absolute",
    right: ".4rem",
    top: "2rem",
    zIndex: 2,
    padding: "0.6rem"
  },
  listMenuHidden: {
    display: "none"
  },
  listItem: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    margin: 0,
    fontSize: "0.8rem",
    padding: "0.2rem",

    "&:hover": {
      background: "none",
      borderRadius: "0",
      color: "red"
    }
  }
}));

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  background: isDragging ? "#5262bc" : "#fff",
  color: isDragging ? "#fff" : "#000",
  ...draggableStyle
});

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? "lightgrey" : "#fff"
});

const Todo: React.FC = () => {
  const classes = useStyle();

  const [state, dispatch] = useReducer(reducer, []);
  const [menu, setMenu] = React.useState<string>("");

  const handleMenu = (listName: string) => {
    if (menu !== "") {
      setMenu("");
      return;
    }
    setMenu(listName);
  };

  const getCurrentListsName = () => {
    return Object.keys(state);
  };

  const removeItemFromlist = (index: number, listName: string) => {
    const arr = state[listName];
    arr.splice(index, 1);

    dispatch({
      type: "REMOVE_LIST_ITEM",
      payload: arr,
      listName: listName
    });
  };

  const removelist = (listName: string) => {
    const arr = Object.assign({}, state);
    delete arr[listName];
    dispatch({
      type: "REMOVE_LIST",
      payload: arr
    });
  };

  const renderLists = () => {
    return Object.keys(state).map((listName, index) => {
      return (
        <Droppable droppableId={listName} key={index}>
          {(provided: any, snapshot: any) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Paper
                className={classes.listPaper}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <Paper
                  className={
                    menu === listName
                      ? classes.listMenu
                      : classes.listMenuHidden
                  }
                >
                  <IconButton
                    onClick={() => removelist(listName)}
                    aria-label="Delete"
                    className={classes.button}
                  >
                    Delete list
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Paper>

                <div className={classes.listTitle}>{listName}</div>
                <span
                  className={classes.listTitleSpan}
                  onClick={() => handleMenu(listName)}
                >
                  ...
                </span>
                <List>
                  {state[listName].map((item: any, index: any) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided: any, snapshot: any) => (
                        <ListItem
                          classes={{ root: classes.listItem }}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <Typography>{item.note}</Typography>
                          <IconButton
                            onClick={() => removeItemFromlist(index, listName)}
                            aria-label="Delete"
                            className={classes.button}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </ListItem>
                      )}
                    </Draggable>
                  ))}
                </List>
                {provided.placeholder}
              </Paper>
            </Grid>
          )}
        </Droppable>
      );
    });
  };

  // useEffect(() => {
  //   console.log(menu);
  // }, [menu]);

  const move = (
    source: any,
    droppableSource: any,
    droppableDestination: any,
    destination: any = null
  ) => {
    const sourceClone = Array.from(source);
    let result: any = {};
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    if (destination !== null) {
      const destClone = Array.from(destination);
      destClone.splice(droppableDestination.index, 0, removed);

      result[droppableDestination.droppableId] = destClone;
    } else {
      sourceClone.splice(droppableDestination.index, 0, removed);
    }
    result[droppableSource.droppableId] = sourceClone;

    return result;
  };

  const getList = (id: any) => state[id];

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const result = move(getList(source.droppableId), source, destination);

      dispatch({
        type: "REORDER_ITEMS",
        payload: result
      });
    } else {
      const result = move(
        getList(source.droppableId),
        source,
        destination,
        getList(destination.droppableId)
      );

      dispatch({
        type: "REORDER_ITEMS",
        payload: result
      });
    }
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
            <DragDropContext onDragEnd={onDragEnd}>
              {renderLists()}
            </DragDropContext>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Todo;

//TODO: Refactoring component to small pieces and better code
