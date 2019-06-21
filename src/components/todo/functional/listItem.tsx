import React from "react";
import ListItemsPresentation from "../presentation/listItem";

const ListItems: React.FC<any> = ({ list, listName, dispatch }) => {
  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    background: isDragging ? "#5262bc" : "#fff",
    color: isDragging ? "#fff" : "#000",
    ...draggableStyle
  });

  const removeItemFromlist = (index: number) => {
    // const arr = state[listName];
    const arr = list;
    arr.splice(index, 1);

    dispatch({
      type: "REMOVE_LIST_ITEM",
      payload: arr,
      listName: listName
    });
  };

  return (
    <ListItemsPresentation
      list={list}
      getItemStyle={getItemStyle}
      removeItemFromlist={removeItemFromlist}
    />
  );
};

export default ListItems;
