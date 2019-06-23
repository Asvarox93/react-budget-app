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

  const [dataItems, setDataItems] = React.useState<State>({
    data: JSON.parse(
      localStorage.getItem(`budgetData${budgetItemTitle}`) || "[]"
    )
  });

  const setDataSum = () => {
    let sum = 0;
    dataItems.data.forEach((item: any) => {
      sum += parseFloat(item.amount);
    });

    return Math.floor(sum * 100) / 100;
  };

  const removeDataItem = (val: string) => {
    const array: Array<Data> = [...dataItems.data];
    console.log("item:", dataItems.data);
    const index = dataItems.data.findIndex((el: Data) => el.id === val);
    if (index !== -1) {
      array.splice(index, 1);
      setDataItems({
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

      setDataItems({
        data: [...dataItems.data, { id, ...budgetItemVal, added }]
      });
    }
    // eslint-disable-next-line
  }, [budgetItemVal]);

  // Loading Sample Data For BudgetItems
  useEffect(() => {
    if (localStorage.getItem(`budgetData${budgetItemTitle}`)) return;

    const sampleData: Data[] = getSampleData(budgetItemTitle);
    setDataItems({
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
      ...dataItems.data.map((data: any) => {
        return { date: data.added, [budgetItemTitle]: parseFloat(data.amount) };
      })
    ]);
    localStorage.setItem(
      `budgetData${budgetItemTitle}`,
      JSON.stringify(dataItems.data)
    );

    // eslint-disable-next-line
  }, [dataItems]);

  return (
    <Revenue
      budgetItemTitle={budgetItemTitle}
      dataItem={dataItems.data}
      removeDataItem={removeDataItem}
    />
  );
};

export default BudgetItems;
