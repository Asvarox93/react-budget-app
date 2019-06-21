import React, { useState } from "react";
import { Props } from "../../interfaces/newItem/newItem_interface";
import NewItemForm from "./presentation";

const NewItem: React.FC<Props> = ({ dispatch, getCurrentListsName }) => {
  const [list, setList] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleNoteChange = () => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNote(event.target.value);
  };

  const handleListChange = () => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setList(event.target.value);
  };

  const getUniqueId = () => {
    return (
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .substr(2, 5)
    ).toUpperCase();
  };

  const setSelectOption = () => {
    const range = getCurrentListsName().map((item: string) => ({
      value: item,
      label: item
    }));

    return range;
  };

  const submitForm = () => {
    dispatch({
      type: "ADD_LIST_ITEM",
      payload: { id: getUniqueId(), note: note },
      listName: list
    });
    setErrors([]);
    setNote("");
  };

  const validateInputs = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    let inputErrors: string[] = [];
    if (list === "" || note === "") inputErrors.push("Fields cannot be empty!");
    if (note.length < 3)
      inputErrors.push("Description must contains min. 3 characters!");
    if (inputErrors.length > 0) {
      setErrors(inputErrors);
      return;
    }
    submitForm();
  };

  return (
    <NewItemForm
      list={list}
      handleListChange={handleListChange}
      note={note}
      handleNoteChange={handleNoteChange}
      validateInputs={validateInputs}
      setSelectOption={setSelectOption}
      errors={errors}
    />
  );
};

export default NewItem;
