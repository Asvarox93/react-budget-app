import React, { useReducer, useEffect } from "react";
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
    case "LOAD_LOCALSTORAGE":
      return {
        ...action.payload
      };
    default: {
      return state;
    }
  }
};

const Todo: React.FC = () => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todoData") || "{}")
  );

  const getCurrentListsName = () => {
    return Object.keys(state);
  };

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(state));
    // eslint-disable-next-line
  }, [state]);

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
