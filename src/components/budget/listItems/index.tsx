import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import * as listItemsInterfaces from "../../interfaces/listItems_interface";

const useStyles = makeStyles(theme => ({
  tableTitle: {
    width: "70%"
  },
  tableCell: {
    wordBreak: "break-all"
  },
  button: {
    margin: 0,
    padding: "0.2rem",
    "&:hover": {
      color: "red"
    }
  },
  strikethrough: {
    textDecoration: "line-through"
  }
}));

const ListItems: React.FC<listItemsInterfaces.Props> = props => {
  const classes = useStyles();
  const { listData, removeItem } = props;
  const [strikethrough, setStrikethrough] = React.useState<number[]>([]);

  const strikethroughItems = (id: number) => {
    if (strikethrough.includes(id)) {
      setStrikethrough(
        strikethrough.filter(value => {
          return value !== id;
        })
      );
      return;
    }
    setStrikethrough([...strikethrough, id]);
  };

  const handleRemoveItem = (data: any) => {
    if (strikethrough.includes(data.id)) {
      strikethroughItems(data.id);
    }

    removeItem(data);
  };

  return (
    <Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableTitle}>Description</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {listData.map((data: any) => (
            <TableRow
              key={data.id}
              onClick={() => {
                strikethroughItems(data.id);
              }}
              className={
                strikethrough.includes(data.id) ? classes.strikethrough : ""
              }
            >
              <TableCell className={classes.tableCell}>
                {data.description}
              </TableCell>
              <TableCell>{data.added}</TableCell>
              <TableCell>{data.amount}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleRemoveItem(data)}
                  aria-label="Delete"
                  className={classes.button}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default ListItems;
