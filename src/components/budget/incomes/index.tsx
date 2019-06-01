import React, { Fragment, useEffect } from "react";
import * as incomesInterfaces from "../../interfaces/incomes_interface";
import ListItems from "../listItems";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: 240
  }
}));

const Incomes: React.FC<incomesInterfaces.props> = props => {
  const classes = useStyle();
  const [incomes, setIncomes] = React.useState<incomesInterfaces.state>({
    incomes: []
  });

  const getIncomesId = () => {
    let id = 0;

    incomes.incomes.forEach((item: any) => {
      if (item.id === id) id++;
    });

    return id;
  };

  const setIncomesSum = (lastAmount: string) => {
    let sum = 0;
    incomes.incomes.forEach((item: any) => {
      sum += parseInt(item.amount);
    });

    return sum + parseInt(lastAmount);
  };

  useEffect(() => {
    if (props.incomeVal.amount) {
      const id = getIncomesId();
      const added = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      setIncomes({
        incomes: [...incomes.incomes, { id, ...props.incomeVal, added }]
      });

      props.setIncomeSum({
        ...props.incomesSum,
        incomesSum: setIncomesSum(props.incomeVal.amount)
      });
    }
    // eslint-disable-next-line
  }, [props.incomeVal]);

  return (
    <Fragment>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={classes.paper}>
          <Typography>Income</Typography>
          <ListItems listData={incomes.incomes} />
        </Paper>
      </Grid>
    </Fragment>
  );
};

export default Incomes;
