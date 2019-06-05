import React, { Fragment, useEffect } from "react";
import * as budgetItemsInterfaces from "../../interfaces/budgetItems_interface";
import ListItems from "../listItems";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { getSampleData } from "./sampleData";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: 240
  }
}));

const BudgetItems: React.FC<budgetItemsInterfaces.props> = props => {
  const classes = useStyle();
  const {
    setBudgetItemSum,
    budgetItemVal,
    budgetItemTitle,
    setChartData
  } = props;

  const [dataItem, setDataItem] = React.useState<budgetItemsInterfaces.state>({
    data: []
  });

  const setDataSum = () => {
    let sum = 0;
    dataItem.data.forEach((item: any) => {
      sum += parseFloat(item.amount);
    });

    return Math.floor(sum * 100) / 100;
  };

  const removeDataItem = (val: number) => {
    const array: Array<object> = [...dataItem.data];
    const index = dataItem.data.indexOf(val);

    if (index !== -1) {
      array.splice(index, 1);
      setDataItem({
        data: array
      });
    }
  };

  const getUniqueId = () => {
    return (
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .substr(2, 5)
    ).toUpperCase();
  };
  const getCurrentDate = () => {
    return new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");
  };

  useEffect(() => {
    if (budgetItemVal.amount) {
      const id = getUniqueId();
      const added = getCurrentDate();

      setDataItem({
        data: [...dataItem.data, { id, ...budgetItemVal, added }]
      });
    }
    // eslint-disable-next-line
  }, [budgetItemVal]);

  // Loading Sample Data For BudgetItems
  useEffect(() => {
    const sampleData = getSampleData(budgetItemTitle);
    setDataItem({
      data: sampleData
    });

    setChartData([
      ...sampleData.map(data => {
        return { date: data.added, budgetItemTitle: data.amount };
      })
    ]);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setBudgetItemSum(Math.floor(setDataSum() * 100) / 100);

    setChartData([
      ...dataItem.data.map((data: any) => {
        return { date: data.added, [budgetItemTitle]: parseFloat(data.amount) };
      })
    ]);

    // eslint-disable-next-line
  }, [dataItem]);

  return (
    <Fragment>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={classes.paper}>
          <Typography>{budgetItemTitle}</Typography>
          <ListItems listData={dataItem.data} removeItem={removeDataItem} />
        </Paper>
      </Grid>
    </Fragment>
  );
};

export default BudgetItems;
