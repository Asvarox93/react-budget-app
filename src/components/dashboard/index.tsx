import React from "react";
import { Route } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import * as dashboardInterfaces from "../interfaces/dashboard_interface";
import { useStyles } from "./styles";
import Menu from "./menu";
import Todo from "../todo";
import Budget from "../budget";
import Cockpit from "../cockpit";

const MadeWithLove = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by "}
      <Link color="inherit" href="https://sbialek.com/">
        Sebastian Białek
      </Link>
    </Typography>
  );
};

const Dashboard: React.FC<dashboardInterfaces.Props> = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeToolBarTitle = () => {
    const url = props.location.pathname;
    const slice = url.charAt(1).toUpperCase() + url.slice(2);
    return slice ? slice : "Dashboard";
  };

  changeToolBarTitle();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {changeToolBarTitle()}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Typography variant="h5" color="textPrimary" align="left">
            John Doe
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Menu />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Route exact path="/" component={Cockpit} />
            <Route path="/budget" component={Budget} />
            <Route path="/todo" component={Todo} />
          </Grid>
        </Container>
        <MadeWithLove />
      </main>
    </div>
  );
};

export default Dashboard;
