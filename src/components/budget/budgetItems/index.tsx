import React, { useEffect } from "react";
import {
  State,
  Props,
  Data
} from "../../interfaces/budgetItems/budgetItems_interface";
import Revenue from "./presentation";
import { getSampleData } from "./sampleData";

const BudgetItems: React.FC<Props> = props => {
  const {
    setBudgetItemSum,
    budgetItemVal,
    budgetItemTitle,
    setChartData
  } = props;

  const [dataItem, setDataItem] = React.useState<State>({
    data: []
  });

  const setDataSum = () => {
    let sum = 0;
    dataItem.data.forEach((item: any) => {
      sum += parseFloat(item.amount);
    });

    return Math.floor(sum * 100) / 100;
  };

  interface test {
    id: string;
    registrationId: number;
  }
  const removeDataItem = (val: string) => {
    const array: Array<Data> = [...dataItem.data];
    console.log("item:", dataItem.data);
    const index = dataItem.data.findIndex((el: Data) => el.id === val);
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
    const sampleData: Data[] = getSampleData(budgetItemTitle);
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
    <Revenue
      budgetItemTitle={budgetItemTitle}
      dataItem={dataItem.data}
      removeDataItem={removeDataItem}
    />
  );
};

export default BudgetItems;
