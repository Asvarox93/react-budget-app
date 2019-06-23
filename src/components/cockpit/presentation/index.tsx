import React from "react";
import {
  Grid,
  Paper,
  Typography,
  makeStyles,
  Container
} from "@material-ui/core";
import clsx from "clsx";
import Weather from "../weather";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    marginBottom: "1rem"
  },
  fixedHeight: {
    height: 240
  },
  fixedDoubleeight: {
    height: 496
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const CockpitGui: React.FC = () => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedDoubleHeightPaper = clsx(classes.paper, classes.fixedDoubleeight);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper className={fixedDoubleHeightPaper}>
            <Typography>Todo Tasks</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <Typography>Recent Deposits</Typography>
          </Paper>
          <Weather />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CockpitGui;
