import React from "react";
import Table from "@material-ui/core/Table";
import { Props } from "../../../../interfaces/RevenueItems/revenueTable_interface";
import RevenueTableHead from "./tableHead";
import RevenueTableBody from "./tableBody";

const RevenueTable: React.FC<Props> = ({
  listData,
  strikethroughItems,
  strikethrough,
  handleRemoveItem
}) => {
  return (
    <Table size="small">
      <RevenueTableHead />
      <RevenueTableBody
        listData={listData}
        strikethrough={strikethrough}
        handleRemoveItem={handleRemoveItem}
        strikethroughItems={strikethroughItems}
      />
    </Table>
  );
};

export default RevenueTable;
