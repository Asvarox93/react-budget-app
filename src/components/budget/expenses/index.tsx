import React, { Fragment, useEffect } from "react";
import * as expensesInterfaces from "../../interfaces/expenses_interface";
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

const Expenses: React.FC<expensesInterfaces.props> = props => {
  const classes = useStyle();
  const [expenses, setExpenses] = React.useState<expensesInterfaces.state>({
    expenses: []
  });

  const setExpensesSum = (lastAmount: string) => {
    let sum = 0;
    expenses.expenses.forEach((item: any) => {
      sum += parseInt(item.amount);
    });

    return sum + parseInt(lastAmount);
  };

  const getExpensesId = () => {
    let id = 0;

    expenses.expenses.forEach((item: any) => {
      if (item.id === id) id++;
    });

    return id;
  };

  useEffect(() => {
    if (props.expneseVal.amount) {
      const id = getExpensesId();
      const added = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      setExpenses({
        expenses: [...expenses.expenses, { id, ...props.expneseVal, added }]
      });

      props.setExpensesSum({
        ...props.expnesesSum,
        expensesSum: setExpensesSum(props.expneseVal.amount)
      });
    }
    // eslint-disable-next-line
  }, [props.expneseVal]);

  return (
    <Fragment>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={classes.paper}>
          <Typography>Expanse</Typography>
          <ListItems listData={expenses.expenses} />
        </Paper>
      </Grid>
    </Fragment>
  );
};

export default Expenses;
