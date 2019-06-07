import React, { useEffect } from "react";
import _ from "lodash";
import {
  Props,
  Data
} from "../../interfaces/budgetChart/budgetChart_interface";
import ChartBox from "./presentation";

const BudgetChart: React.FC<Props> = ({
  chartIncomesData,
  chartExpensesData
}) => {
  const [chartData, setChartData] = React.useState<Array<Data>>([]);

  const sortDataByDate = (data: Array<Data>) => {
    return _.orderBy(data, "date", "asc");
  };

  const addBudgetPropToArray = (data: Array<Data>) => {
    const arr: Array<Data> = data.map((data: Data) => {
      if (data.expenses === undefined) {
        return { ...data, expenses: 0 };
      }
      if (data.incomes === undefined) {
        return { ...data, incomes: 0 };
      }
      return data;
    });

    return arr;
  };

  const sumArrayByDate = (data: Array<Data>) => {
    let sum: Array<Data> = [];
    data.forEach((o: Data) => {
      let existing: Data = sum.filter((i: Data) => {
        return i.date === o.date;
      })[0];

      if (!existing) sum.push(o);
      else {
        existing.incomes += o.incomes;
        existing.expenses += o.expenses;
      }
    });
    return sum;
  };

  useEffect(() => {
    const unsortedData: Array<object> = chartIncomesData.concat(
      chartExpensesData
    );
    let data: Array<Data> = sortDataByDate(unsortedData as Data[]);
    data = addBudgetPropToArray(data);
    data = sumArrayByDate(data);

    setChartData(data);
  }, [chartIncomesData, chartExpensesData]);

  return <ChartBox chartData={chartData} />;
};
export default BudgetChart;
