import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import RenderLists from "../functional/renderList";

const useStyle = makeStyles(theme => ({
  renderList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
}));

const TodoLists: React.FC<any> = ({ state, dispatch }) => {
  const classes = useStyle();

  return (
    <Grid item xs={12}>
      <Typography>Todo Lists</Typography>
      <Grid item xs={12} className={classes.renderList}>
        <RenderLists state={state} dispatch={dispatch} />
      </Grid>
    </Grid>
  );
};

export default TodoLists;
