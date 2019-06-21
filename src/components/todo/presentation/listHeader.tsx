import React, { Fragment } from "react";
import { Paper, makeStyles, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyle = makeStyles(theme => ({
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

const ListHeaderPresentation: React.FC<any> = ({
  menu,
  removelist,
  listName,
  handleMenu
}) => {
  const classes = useStyle();

  return (
    <Fragment>
      <Paper
        className={
          menu === listName ? classes.listMenu : classes.listMenuHidden
        }
      >
        <IconButton
          onClick={() => removelist()}
          aria-label="Delete"
          className={classes.button}
        >
          Delete list
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Paper>
      <div className={classes.listTitle}>{listName}</div>
      <span className={classes.listTitleSpan} onClick={() => handleMenu()}>
        ...
      </span>
    </Fragment>
  );
};

export default ListHeaderPresentation;
