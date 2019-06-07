import React from "react";
import { Props } from "../../../interfaces/RevenueItems/revenueItems_interface";
import RevenueTable from "./presentation";

const RevenueItems: React.FC<Props> = ({ listData, removeItem }) => {
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

  const handleRemoveItem = (id: string) => {
    if (strikethrough.includes(parseInt(id))) {
      strikethroughItems(parseInt(id));
    }

    removeItem(id);
  };

  return (
    <RevenueTable
      listData={listData}
      strikethroughItems={strikethroughItems}
      strikethrough={strikethrough}
      handleRemoveItem={handleRemoveItem}
    />
  );
};

export default RevenueItems;
