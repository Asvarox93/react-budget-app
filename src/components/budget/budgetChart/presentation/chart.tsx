import React from "react";
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
import * as chartInterfaces from "../../../interfaces/budgetChart/chart_interface";

const Chart: React.FC<chartInterfaces.Props> = ({ chartData }) => {
  return (
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

        <Line type="monotone" dataKey="incomes" stroke="#43a047" dot={false} />
        <Line type="monotone" dataKey="expenses" stroke="#F24C65" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
