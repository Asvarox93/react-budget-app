import React from "react";
import {
  makeStyles,
  Typography,
  List,
  ListItem,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Draggable } from "react-beautiful-dnd";

const useStyle = makeStyles(theme => ({
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

const ListItemsPresentation: React.FC<any> = ({
  list,
  getItemStyle,
  removeItemFromlist
}) => {
  const classes = useStyle();

  return (
    <List>
      {list.map((item: any, index: any) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
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
                onClick={() => removeItemFromlist(index)}
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
  );
};

export default ListItemsPresentation;
