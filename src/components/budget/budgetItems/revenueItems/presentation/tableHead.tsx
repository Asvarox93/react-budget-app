import React from "react";
import TableHead from "@material-ui/core/TableHead";
import { makeStyles } from "@material-ui/styles";
import { TableRow, TableCell } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  tableTitle: {
    width: "70%"
  }
}));

const RevenueTableHead = () => {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tableTitle}>Description</TableCell>
        <TableCell>Date</TableCell>
        <TableCell align="right">Amount</TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
  );
};

export default RevenueTableHead;
