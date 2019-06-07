const smapleIncomesData = [
  {
    added: "2019/06/01",
    amount: "1500",
    budgetType: "incomes",
    description: "Wypłata",
    id: "JWJ50VI67O68D1"
  },
  {
    added: "2019/06/02",
    amount: "500",
    budgetType: "incomes",
    description: "Social",
    id: "JWJ50VI67O68D2"
  },
  {
    added: "2019/06/03",
    amount: "250",
    budgetType: "incomes",
    description: "Prace organizacyjne w XYZ",
    id: "JWJ50VI67O68D3"
  },
  {
    added: "2019/06/04",
    amount: "1250",
    budgetType: "incomes",
    description: "Strona internetowa",
    id: "JWJ50VI67O68D4"
  }
];

const smapleExpensesData = [
  {
    added: "2019/06/01",
    amount: "22",
    budgetType: "expenses",
    description: "Kino",
    id: "JWJ50VI67O68D1"
  },
  {
    added: "2019/06/02",
    amount: "200",
    budgetType: "expenses",
    description: "Paliwo",
    id: "JWJ50VI67O68D2"
  },
  {
    added: "2019/06/03",
    amount: "500",
    budgetType: "expenses",
    description: "Zabawki dla dziecka",
    id: "JWJ50VI67O68D3"
  },
  {
    added: "2019/06/04",
    amount: "429",
    budgetType: "expenses",
    description: "Dywan",
    id: "JWJ50VI67O68D4"
  }
];

export const getSampleData = (type: string) => {
  return type === smapleIncomesData[0].budgetType
    ? smapleIncomesData
    : smapleExpensesData;
};
