import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as listItemsInterfaces from "../../interfaces/listItems_interface";

const useStyles = makeStyles(theme => ({
  tableTitle: {
    width: "70%"
  },
  tableCell: {
    wordBreak: "break-all"
  }
}));

const ListItems: React.FC<listItemsInterfaces.Props> = props => {
  const classes = useStyles();
  const { listData } = props;
  return (
    <Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableTitle}>Description</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listData.map((data: any) => (
            <TableRow key={data.id}>
              <TableCell className={classes.tableCell}>
                {data.description}
              </TableCell>
              <TableCell>{data.added}</TableCell>
              <TableCell align="right">{data.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default ListItems;
