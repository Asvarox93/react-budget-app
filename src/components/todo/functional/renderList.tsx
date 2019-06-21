import React from "react";
import RenderListsPresentation from "../presentation/renderLists";

const RenderLists: React.FC<any> = ({ state = {}, dispatch }) => {
  const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver ? "lightgrey" : "#fff"
  });

  const move = (
    source: any,
    droppableSource: any,
    droppableDestination: any,
    destination: any = null
  ) => {
    const sourceClone = Array.from(source);
    let result: any = {};
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    if (destination !== null) {
      const destClone = Array.from(destination);
      destClone.splice(droppableDestination.index, 0, removed);

      result[droppableDestination.droppableId] = destClone;
    } else {
      sourceClone.splice(droppableDestination.index, 0, removed);
    }
    result[droppableSource.droppableId] = sourceClone;

    return result;
  };

  const getList = (id: any) => state[id];

  const reorderItems = (result: any) => {
    dispatch({
      type: "REORDER_ITEMS",
      payload: result
    });
  };

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const result = move(getList(source.droppableId), source, destination);
      reorderItems(result);
    } else {
      const result = move(
        getList(source.droppableId),
        source,
        destination,
        getList(destination.droppableId)
      );

      reorderItems(result);
    }
  };
  return (
    <RenderListsPresentation
      onDragEnd={onDragEnd}
      state={state}
      getListStyle={getListStyle}
      dispatch={dispatch}
    />
  );
};

export default RenderLists;
