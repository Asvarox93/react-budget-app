import React, { useReducer } from "react";
import TodoGui from "./presentation";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_LIST":
      return { ...state, [action.payload]: [] };
    case "REMOVE_LIST": {
      return {
        ...action.payload
      };
    }
    case "ADD_LIST_ITEM":
      return {
        ...state,
        [action.listName]: [...state[action.listName], action.payload]
      };
    case "REMOVE_LIST_ITEM":
      return {
        ...state,
        [action.listName]: action.payload
      };
    case "REORDER_ITEMS":
      return {
        ...state,
        ...action.payload
      };
    default: {
      return state;
    }
  }
};

const Todo: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const getCurrentListsName = () => {
    return Object.keys(state);
  };

  return (
    <TodoGui
      dispatch={dispatch}
      getCurrentListsName={getCurrentListsName}
      state={state}
    />
  );
};

export default Todo;

//TODO: changing <any> type to correct type in every todo components.
