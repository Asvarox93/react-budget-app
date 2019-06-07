export interface Props {
  budgetItemTitle: string;
  dataItem: Array<object>;
  removeDataItem: (val: string) => void;
}
