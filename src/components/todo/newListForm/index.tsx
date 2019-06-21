import React, { useState } from "react";
import { Props } from "../../interfaces/newList/newList_interface";
import NewListForm from "./presentation";

const NewList: React.FC<Props> = ({ dispatch, getCurrentListsName }) => {
  const [listName, setListName] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setListName(event.target.value);
  };

  const submitHandle = (listNameUp: string) => {
    dispatch({ type: "ADD_LIST", payload: listNameUp });
    setListName("");
    setErrors([]);
  };

  const validateInputs = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    let inputErrors: string[] = [];
    const listNameUp = listName.toUpperCase();

    if (listName === "") inputErrors.push("Fields cannot be empty!");
    const currentLists: Array<string> = getCurrentListsName();
    if (
      currentLists
        .toString()
        .toUpperCase()
        .includes(listNameUp)
    )
      inputErrors.push("List name cannot be repeated!");

    if (inputErrors.length > 0) {
      setErrors(inputErrors);
      return;
    }
    submitHandle(listNameUp);
  };

  return (
    <NewListForm
      listName={listName}
      handleChange={handleChange}
      validateInputs={validateInputs}
      errors={errors}
    />
  );
};

export default NewList;
