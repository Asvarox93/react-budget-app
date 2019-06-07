import React, { Fragment } from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { Props } from "../../../interfaces/budgetItems/revenue_interface";
import ListItems from "../revenueItems";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: 240
  }
}));

const Revenue: React.FC<Props> = ({
  budgetItemTitle,
  dataItem,
  removeDataItem
}) => {
  const classes = useStyle();

  return (
    <Fragment>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={classes.paper}>
          <Typography>{budgetItemTitle}</Typography>
          <ListItems listData={dataItem} removeItem={removeDataItem} />
        </Paper>
      </Grid>
    </Fragment>
  );
};

export default Revenue;
