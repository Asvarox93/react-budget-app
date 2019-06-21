import React, { Fragment } from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";

import { Droppable } from "react-beautiful-dnd";
import ListItems from "../functional/listItem";
import ListHeader from "../functional/listHeader";

const useStyle = makeStyles(theme => ({
  listPaper: {
    position: "relative",
    margin: "0 0.5rem 1rem 0.5rem"
  }
}));

const List: React.FC<any> = ({ state = {}, getListStyle, dispatch }) => {
  const classes = useStyle();

  return (
    <Fragment>
      {Object.keys(state).map((listName, index) => {
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
                  <ListHeader
                    listName={listName}
                    dispatch={dispatch}
                    state={state}
                  />
                  <ListItems
                    list={state[listName]}
                    listName={listName}
                    dispatch={dispatch}
                  />
                  {provided.placeholder}
                </Paper>
              </Grid>
            )}
          </Droppable>
        );
      })}
    </Fragment>
  );
};

export default List;
