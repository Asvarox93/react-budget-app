import React, { Fragment, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid
} from "recharts";
import _ from "lodash";
import { Typography } from "@material-ui/core";
import * as chartInterfeces from "../../interfaces/budgetChart_interface";

const Chart: React.FC<chartInterfeces.props> = props => {
  const { chartIncomesData, chartExpensesData } = props;

  const [chartData, setChartData] = React.useState<Array<object>>([]);

  const sortDataByDate = (data: any) => {
    return _.orderBy(data, "date", "asc");
  };

  const addBudgetPropToArray = (data: any) => {
    const arr = data.map((data: any) => {
      if (data.Expenses === undefined) {
        return { ...data, Expenses: 0 };
      }
      if (data.Incomes === undefined) {
        return { ...data, Incomes: 0 };
      }
      return data;
    });

    return arr;
  };

  const sumArrayByDate = (data: any) => {
    let sum: any = [];
    data.forEach(function(o: any) {
      var existing = sum.filter(function(i: any) {
        return i.date === o.date;
      })[0];

      if (!existing) sum.push(o);
      else {
        existing.Incomes += o.Incomes;
        existing.Expenses += o.Expenses;
      }
    });
    return sum;
  };

  useEffect(() => {
    const unsortedData = chartIncomesData.concat(chartExpensesData);
    let data = sortDataByDate(unsortedData);
    data = addBudgetPropToArray(data);
    data = sumArrayByDate(data);

    setChartData(data);
  }, [chartIncomesData, chartExpensesData]);

  return (
    <Fragment>
      <Typography>Monthly</Typography>
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{
            right: 16,
            bottom: 0,
            left: 24
          }}
          width={500}
          height={300}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
              Amount ($)
            </Label>
          </YAxis>
          <Tooltip />

          <Line
            type="monotone"
            dataKey="Incomes"
            stroke="#43a047"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Expenses"
            stroke="#F24C65"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Fragment>
  );
};
export default Chart;
