import React from "react";
import {
  Grid,
  Paper,
  Typography,
  makeStyles,
  Container
} from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const Cockpit: React.FC = () => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Typography>Monthly</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Typography>Recent Deposits</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>Todo Tasks</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cockpit;
