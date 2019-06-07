import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import * as chartBoxInterfaces from "../../../interfaces/budgetChart/chartBox_interface";
import Chart from "./chart";

const ChartBox: React.FC<chartBoxInterfaces.Props> = ({ chartData }) => {
  return (
    <Fragment>
      <Typography>Monthly</Typography>
      <Chart chartData={chartData} />
    </Fragment>
  );
};

export default ChartBox;
