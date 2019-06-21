import React, { Fragment } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./list";

const RenderListsPresentation: React.FC<any> = ({
  onDragEnd,
  state,
  getListStyle,
  dispatch
}) => {
  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        <List state={state} getListStyle={getListStyle} dispatch={dispatch} />
      </DragDropContext>
    </Fragment>
  );
};

export default RenderListsPresentation;
