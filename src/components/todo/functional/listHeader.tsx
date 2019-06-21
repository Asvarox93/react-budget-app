import React from "react";
import ListHeaderPresentation from "../presentation/listHeader";

const ListHeader: React.FC<any> = ({ dispatch, state, listName }) => {
  const [menu, setMenu] = React.useState<string>("");

  const handleMenu = () => {
    if (menu !== "") {
      setMenu("");
      return;
    }
    setMenu(listName);
  };

  const removelist = () => {
    const arr = Object.assign({}, state);
    delete arr[listName];
    dispatch({
      type: "REMOVE_LIST",
      payload: arr
    });
  };

  return (
    <ListHeaderPresentation
      handleMenu={handleMenu}
      removelist={removelist}
      menu={menu}
      listName={listName}
    />
  );
};

export default ListHeader;
