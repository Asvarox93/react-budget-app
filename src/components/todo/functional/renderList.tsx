import React from "react";
import RenderListsPresentation from "../presentation/renderLists";
import { DropResult, DraggableLocation } from "react-beautiful-dnd";

const RenderLists: React.FC<any> = ({ state, dispatch }) => {
  const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "lightgrey" : "#fff"
  });

  const move = (
    source: object[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation,
    destination?: object[]
  ) => {
    const sourceClone = Array.from(source);
    let result: { [key: string]: object[] } = {};
    const [removed]: object[] = sourceClone.splice(droppableSource.index, 1);
    if (destination) {
      const destClone = Array.from(destination);
      destClone.splice(droppableDestination.index, 0, removed);

      result[droppableDestination.droppableId] = destClone;
    } else {
      sourceClone.splice(droppableDestination.index, 0, removed);
    }
    result[droppableSource.droppableId] = sourceClone;

    return result;
  };

  const getList = (id: string) => state[id];

  const reorderItems = (result: { [key: string]: object[] }) => {
    dispatch({
      type: "REORDER_ITEMS",
      payload: result
    });
  };

  const onDragEnd = (result: DropResult) => {
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
