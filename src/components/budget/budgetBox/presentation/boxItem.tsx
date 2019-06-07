import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import * as itemInterfaces from "../../../interfaces/budgetBox/item_interface";
import clsx from "clsx";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    marginTop: 7,
    height: 65
  },
  incomes: {
    backgroundColor: "#43A047"
  },
  expenses: {
    backgroundColor: "#D22F2F"
  },
  balance: {
    backgroundColor: "#3F51B5"
  }
}));

const Item: React.FC<itemInterfaces.Props> = ({
  itemTitle,
  itemSum,
  itemPercent,
  itemColor
}) => {
  const classes = useStyle();
  const itemBgc = clsx(classes.paper, classes[itemColor]);
  return (
    <Paper className={itemBgc}>
      <Typography>
        {itemTitle}: {itemSum}$
      </Typography>
      {itemPercent ? <Typography>{itemPercent}%</Typography> : ""}
    </Paper>
  );
};

export default Item;
