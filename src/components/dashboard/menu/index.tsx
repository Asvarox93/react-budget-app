import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ListIcon from "@material-ui/icons/List";

const Menu: React.FC = () => {
  return (
    <div>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/budget">
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Budget" />
      </ListItem>
      <ListItem button component={Link} to="/todo">
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Todo List" />
      </ListItem>
    </div>
  );
};

export default Menu;
