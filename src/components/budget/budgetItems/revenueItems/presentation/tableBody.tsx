import React from "react";
import { makeStyles } from "@material-ui/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Props } from "../../../../interfaces/RevenueItems/revenueTable_interface";

const useStyles = makeStyles(theme => ({
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
const RevenueTableBody: React.FC<Props> = ({
  listData,
  strikethroughItems,
  strikethrough,
  handleRemoveItem
}) => {
  const classes = useStyles();
  return (
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
              onClick={() => handleRemoveItem(data.id)}
              aria-label="Delete"
              className={classes.button}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default RevenueTableBody;
